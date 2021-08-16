
export default {
  actUpdateAsync(context,payload) {
    // 返回Promise
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        context.commit('updateAsync');
        console.log(payload);
        resolve('111');
        reject('000');
      }, 1000)
    })
  }
}