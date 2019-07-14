workflow "On Update" {
  on = "push"
  resolves = ["Test", "Lint"]
}

action "Install" {
  uses = "nuxt/actions-yarn@master"
  args = "install"
}

action "Test" {
  uses = "nuxt/actions-yarn@master"
  needs = ["Install"]
  args = "test"
}

action "Lint" {
  uses = "nuxt/actions-yarn@master"
  needs = ["Install"]
  args = "lint"
}
