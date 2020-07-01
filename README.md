# Automate Task Using Node JS
This is a simple node js app for automating the task.This will simply move file from Downloads folder to specific location

# Run Process in Background using PM2
`npm install pm2@latest -g`
`pm2 start index.js`

#Check Status of process
`pm2 status`

#Test the App
- Move mp4,jpeg,deb file in your Downloads folder
- Check it will move to new location
  
  New Locations
1. Image : /home/${USER}/Images/
2. Songs : /home/${USER}/Songs/
3. Html :  /home/${USER}/Html/
4. Videos: /home/${USER}/Videos/