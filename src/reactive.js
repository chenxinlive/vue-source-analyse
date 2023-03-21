const targetMap = new WeakMap()

function track(target, key) {
  let depsMap = targetMap.get(depsMap)
  if (!depsMap) {
    depsMap.set(target, (depsMap = new Map()))
  }
  let dep = depsMap.get(key)
  if (!dep) {
    depsMap.set(key, (dep = new Set()))
  }
  dep.add(effect)
}

function trigger(target, key) {
  let depsMap = targetMap.get(target)
  if (!depsMap) return;
  let dep = depsMap.get(key)
  if (dep) {
    dep.forEach(effect => effect())
  }
}

let effect = () => {}
let user = { name: 'cx' }
track(user, 'name')
trigger(user, 'name')