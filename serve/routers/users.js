const express = require('express')
const isEmpty = require('lodash/isEmpty')
const validator = require('validator')
const users = express.Router()

const userSingnupInput = (data) => {
    let errors = {}
    if (validator.isEmpty(data.username)) {
        errors.username = "请输入用户名"
    }
    if (!validator.isEmail(data.email)) {
        errors.email = "请输入邮箱"
    }
    if (validator.isEmpty(data.password)) {
        errors.password = "请输入密码"
    }
    if (validator.isEmpty(data.PasswordConfirmation)) {
        errors.PasswordConfirmation = "请输入确认密码"
    }
    if (!validator.equals(data.password, data.PasswordConfirmation)) {
        errors.PasswordConfirmation = "两次密码不一致"
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }

}
users.post('/', (req, res) => {
    const { errors, isValid} = userSingnupInput(req.body)
    // console.log(errors);
    
    if (!isValid) {
        res.status(400).json(errors)
    } else {
        res.send({success: '注册成功'})
    }
})

module.exports = users