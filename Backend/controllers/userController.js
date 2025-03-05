const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');


exports.createUser = async (req, res) => {
  try {
    const { name, email, password, phone_number, gender, date_of_birth, membership_status } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User with this email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      phone_number,
      gender,
      date_of_birth,
      membership_status,
    });

    await newUser.save();
    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (err) {
    res.status(400).json({ message: 'Error creating user', error: err.message });
  }
};


exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful', token });
  } catch (err) {
    res.status(400).json({ message: 'Error logging in', error: err.message });
  }
};


exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch (err) {
    res.status(400).json({ message: 'Error fetching users', error: err.message });
  }
};


exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ user });
  } catch (err) {
    res.status(400).json({ message: 'Error fetching user', error: err.message });
  }
};


exports.updateUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const { name, email, phone_number, gender, date_of_birth, membership_status } = req.body;


    if (req.body.password) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      user.password = hashedPassword;
    }

    user.name = name || user.name;
    user.email = email || user.email;
    user.phone_number = phone_number || user.phone_number;
    user.gender = gender || user.gender;
    user.date_of_birth = date_of_birth || user.date_of_birth;
    user.membership_status = membership_status || user.membership_status;

    await user.save();
    res.status(200).json({ message: 'User updated successfully', user });
  } catch (err) {
    res.status(400).json({ message: 'Error updating user', error: err.message });
  }
};


exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(400).json({ message: 'Error deleting user', error: err.message });
  }
};
