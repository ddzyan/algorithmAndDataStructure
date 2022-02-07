abstract class Handler {
  protected nextHandler: Handler
  constructor() {}

  setNextHandler(handler: Handler) {
    this.nextHandler = handler
  }

  public handlerTask(level) {
    if (this.getHandlerLevel() === level) {
      this.task()
    } else {
      if (this.nextHandler) {
        this.nextHandler.handlerTask(level)
      } else {
        console.error('没有处理匹配条件的 handler')
      }
    }
  }

  abstract task()

  abstract getHandlerLevel()
}

class OneHandler extends Handler {
  task() {
    console.log('执行 OneHandler')
  }

  getHandlerLevel() {
    return 1
  }
}

class TwoHandler extends Handler {
  task() {
    console.log('执行 OneHandler')
  }

  getHandlerLevel() {
    return 2
  }
}

class Client {
  static execTask(level) {
    const handler1 = new OneHandler()
    const handler2 = new TwoHandler()
    handler1.setNextHandler(handler2)
    handler1.handlerTask(level)
  }
}

export default Client