const axios = require('../config/axios')

class Test1Controller {
  static async test1(req, res, next) {
    try {
      const { data } = await axios({
        method: 'GET'
      })
      res.status(200).json(data)
    } catch (err) {
      console.log(err)
    }
  }

  static async getById(req, res, next) {
    try {
      const id = +req.params.id
      const { data } = await axios({
        method: 'GET'
      })
      data.map((axiosData) => {
        if(axiosData.id === id) {
          res.status(200).json(axiosData)
        }
      })
    } catch (err) {
      console.log(err)
    }
  }

  static async deleteProfile(req, res, next) {
    try {
    } catch (err) {
      console.log(err)
    }
  }
}

module.exports =  Test1Controller