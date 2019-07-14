workflow "Build Test Deploy" {
  on = "push"
  resolves = [
    "Test",
    "Build",
    "Deploy",
  ]
}

action "Install" {
  uses = "nuxt/actions-yarn@master"
  args = "install"
}

action "Test" {
  uses = "nuxt/actions-yarn@master"
  needs = ["Install"]
  env = {
    CI = "true"
  }
  args = "test"
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

action "Filter Master Branch" {
  uses = "actions/bin/filter@3c0b4f0e63ea54ea5df2914b4fabf383368cd0da"
  needs = ["Lint", "Build", "Test"]
  args = "branch master"
}

action "Deploy" {
  uses = "maxheld83/ghpages@master"
  needs = ["Filter Master Branch"]
  env = {
    BUILD_DIR = "./build"
  }
  secrets = ["GH_PAT"]
}
