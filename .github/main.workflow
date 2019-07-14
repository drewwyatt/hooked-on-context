workflow "On Update" {
  on = "push"
  resolves = [
    "Lint",
    "Test",
    "Build",
  ]
}

action "Install" {
  uses = "nuxt/actions-yarn@master"
  args = "install"
}

action "Test" {
  uses = "nuxt/actions-yarn@master"
  needs = ["Install"]
  args = "test a"
}

action "Lint" {
  uses = "nuxt/actions-yarn@master"
  needs = ["Install"]
  args = "lint"
}

action "Build" {
  uses = "nuxt/actions-yarn@master"
  needs = ["Install"]
  args = "build"
}
