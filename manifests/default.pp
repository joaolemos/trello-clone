package { "python-software-properties":
  ensure  => "installed"
}

exec { "apt-get update":
  command => "/usr/bin/apt-get update"
}

package { "git":
  ensure  => "installed",
  require => Exec [ "apt-get update" ]
}

exec { '/usr/bin/git config --global url."https://".insteadOf git://':
  user        => "vagrant",
  environment => "HOME=/home/vagrant",
  require     => Package [ "git" ]
}

file { '/home/vagrant/.gitconfig':
  ensure => "present"
}

package { "npm":
  ensure  => "installed",
  require => Exec [ "apt-get update" ]
}

package { "nodejs":
  ensure  => "installed",
  require => Exec [ "apt-get update" ]
}

file { '/usr/bin/node':
   ensure => 'link',
   target => '/usr/bin/nodejs',
}

exec { "/usr/bin/npm install -g yo":
  user      => "root",
  logoutput => "on_failure",
  creates   => "/usr/local/bin/yo",
  require   => Package [ "npm" ]
}

exec { "/usr/bin/npm install -g grunt-cli":
  user      => "root",
  logoutput => "on_failure",
  creates   => "/usr/bin/grunt",
  require   => Package [ "npm" ]
}

exec { "/usr/bin/npm install -g browser-sync":
  user      => "root",
  logoutput => "on_failure",
  creates   => "/usr/bin/browser-sync",
  require   => Package [ "npm" ]
}
