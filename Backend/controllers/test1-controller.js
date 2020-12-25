
class Test1Controller {
  static async test1(req, res, next) {
    try {
      res.status(200).json({ test1: 'masuk controller 1' })
    } catch (err) {
      console.log(err)
    }
  }

  static async test2(req, res, next) {
    try {
      res.status(200).json({ test2: 'masuk controller 2' })
    } catch (err) {
      console.log(err)
    }
  }
}

module.exports =  Test1Controller