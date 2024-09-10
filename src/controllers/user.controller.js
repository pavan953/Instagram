import { User } from '../models/User.models.js'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
export const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            return res.status(401).json({
                message: "Please fill in all fields",
                success: false
            });
        }
        const user = await User.findOne({ email })
        if (user) {
            return res.status(401).json({
                message: "Email already exists",
                success: false
            });
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        await User.create({
            username,
            email,
            password: hashedPassword
        });
        return res.status(201).json({
            message: "Account created Successfully!..",
            success: true
        });
    } catch (error) {

    }
}
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(401).json({
                message: "Please fill in all fields",
                success: false
            });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({
                message: "Invalid email or Password",
                success: false
            });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                message: "Invalid email or Password",
                success: false
            });
        }
        user = {
            id: user._id,
            username: user.username,
            email: user.email,
            profilepicture : user.profilepicture,
            bio:user.bio,
            followers: user.followers,
            following: user.following,
            posts: user.posts
        }
        const token = jwt.sign({userId:user._id},process.env.SECRET_KEY,{expiresIn:'1d'})
        return res.cookie('token',token,{httpOnly:true,sameSite:'strict',maxAge: 1*24*60*60*1000}).json({
            message:`Wellcome Back ${user.username}`,
            success:true,
            user
        });
    } catch (error) {

    }
}
export const logout = async(_,res)=>{
    try {
        res.clearCookie('token')
        return res.json({
            message:'Logged out successfully',
            success:true
            })

    } catch (error) {
        console.log(error)
    }
}