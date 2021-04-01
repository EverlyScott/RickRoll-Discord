/**
 * @name NeverGonnaGiveYouUp
 * @authorId 565892085178433542
 */

module.exports = class {
  getName() {
    return 'NeverGonnaGiveYouUp'
  }

  getAuthor() {
    return 'Scribble Nerd'
  }

  getVersion() {
    return '1.0.0'
  }

  getDescription() {
    return 'A Better Discord plugin that displays "Never Gonna Give You Up" (the rick roll) whenever you start your Discord client.'
  }

  start() {
    document.getElementsByClassName('app-2rEoOp')[0].style.display = 'none'
    var rickrollspan = document.createElement('span')
    rickrollspan.id = 'rickroll'
    rickrollspan.innerHTML = '<video src="https://cdn.discordapp.com/attachments/714677532125036558/827088003670343690/Rick_Astley_Never_Gonna_Give_You_Up-150K.mp4" controls autoplay></video><br /><a href="#" onclick="document.getElementById(\'rickroll\').remove();document.getElementsByClassName(\'app-2rEoOp\')[0].style.display = \'flex\'">Take me back to Discord!</a>'
    document.getElementsByClassName('app-1q1i1E')[0].appendChild(rickrollspan)
  }
}
