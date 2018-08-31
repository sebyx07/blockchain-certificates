desc 'Stop all containers'
task :stop do
  sh 'docker stop $(docker ps -a -q)'
end

desc 'Chown'
task :chown do
  sh "sudo chown $USER app vendor config db -R"
end