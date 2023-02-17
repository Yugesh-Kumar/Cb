var c="",x="",y="",z="";
var adipass='<br><p>Additional Recommendations:<br> * <a href="#" onclick="checkpass(6);">Dont save your login details in browsers.</a><br> * <a href="#" onclick="checkpass(7);">Avoid logging in on someones device.</a><br> * <a href="#" onclick="checkpass(8);">Avoid password hints.</a><br> * <a href="#" onclick="checkpass(9);">Dont use a 4-digit pin</a><br> * <a href="#" onclick="checkpass(10);">Avoid using your Password manager to generate OTPs</a><br><p>';
var adibro='<br><br><p>Additional Recommendations:<br> * <a href="#" onclick="checkbro(6);">Beaware of Redirects.</a><br> * <a href="#" onclick="checkbro(7);">Disable automatic downloads.</a><br> * <a href="#" onclick="checkbro(8);">Disallow Locations.</a><br> * <a href="#" onclick="checkbro(9);">Disallow camera/Microphone access.</a><br> * <a href="#" onclick="checkbro(10);">Disable browser password saves.</a><br><p>';
function checkPass(answer) {
    if(answer) {
        document.getElementById("bot").innerHTML = "<p>Does your password contains 12+ characters, special characters,uppercase and lowercase?</p><a href='#' onclick='checkPassword(true);'>Yes  </a><a href='#' onclick='checkPassword(false);'>No</a>";
    } 
}    
function checkPassword(answer) {
    if(answer) {
        y= "<p> Do you reuse your passwords?</p><a href='#' onclick='checkPassword1(true);'> Yes </a><a href='#' onclick='checkPassword1(false);'> No</a>";

    } else {
        y = "<p> Do you reuse your passwords?</p><a href='#' onclick='checkPassword1(true);'> Yes </a><a href='#' onclick='checkPassword1(false);'> No</a>";
        c=c+' * <a href="#" onclick="checkpass(1);">Use a strong Password that should contains 12+ characters, special characters,uppercase and lowercase<br></a>';
    }
    document.getElementById("bot").innerHTML = y;
}
function checkPassword1(answer) {
    if(answer) {
        y = "<p> Do you save your passwords in secure password manager?</p><a href='#' onclick='checkPassword2(true);'> Yes </a><a href='#' onclick='checkPassword2(false);'> No</a>";
        c=c+" * <a href='#' onclick='checkpass(2);'>Don't reuse your passwords<br></a>";
    } else {
        y = "<p>Do you save your passwords in secure password manager?</p><a href='#' onclick='checkPassword2(true);'> Yes </a><a href='#' onclick='checkPassword2(false);'> No</a>";
       
    }
    document.getElementById("bot").innerHTML = y;
}
function checkPassword2(answer) {
    if(answer) {
        y = "<p> Did you share your passwords with someone?</p><a href='#' onclick='checkPassword3(true);'> Yes </a><a href='#' onclick='checkPassword3(false);'> No</a>";
    } 
    else {
        c=c+" * <a href='#' onclick='checkpass(3);'>Only save your passwords in secure password manager.<br></a>";
        y = "<p>Did you share your passwords with someone?</p><a href='#' onclick='checkPassword3(true);'> Yes </a><a href='#' onclick='checkPassword3(false);'> No</a>";
       
    }
    document.getElementById("bot").innerHTML = y;
}
function checkPassword3(answer) {
    if(answer) {
        y = "<p> Did you use Two-Factor-Authentication for all your sensitive accounts?</p><a href='#' onclick='checkPassword4(true);'> Yes </a><a href='#' onclick='checkPassword4(false);'> No</a>";
        c=c+" * <a href='#' onclick='checkpass(4);'>Don't share your passwords with anyone, if you shared the password then change it first.<br></a>";
    } else {
        y = "<p> Did you use Two-Factor-Authentication for all your sensitive accounts?</p><a href='#' onclick='checkPassword4(true);'> Yes </a><a href='#' onclick='checkPassword4(false);'> No</a>";
        
    }
    document.getElementById("bot").innerHTML = y;
}
function checkPassword4(answer) {
    if(answer && c=="") {
        z = "Congragulation!!! You are in a secure state"+adipass;
        y = '<p>Hi, Im Stolen.<br> Im Privacy Enhancement Assistant.<br></p><p>You can check your privacy in the following below fields:<br></p><a href="#" onclick="checkPass(true);">Authentication</a><br><a href="#" onclick="checkbrowser(true);">Browsing the Web</a><br><a href="#" onclick="checkemail(true);">Email</a><br><a href="#" onclick="checkmessage(true);">Secure Messaging</a><br>';
    }
    else if(answer && c!="") {
         z= "Here are the some of the authentication security enhancement recommendations for you.<br>Click any of these to see their details.<br>"+c+adipass;
        c="";
        y = '<p>Hi, Im Stolen.<br> Im Privacy Enhancement Assistant.<br></p><p>You can check your privacy in the following below fields:<br></p><a href="#" onclick="checkPass(true);">Authentication</a><br><a href="#" onclick="checkbrowser(true);">Browsing the Web</a><br><a href="#" onclick="checkemail(true);">Email</a><br><a href="#" onclick="checkmessage(true);">Secure Messaging</a><br>';
     } 
    else {
        c=c+" * <a href='#' onclick='checkpass(5);'>Use Two-Factor-Authentication for all your possible accounts.<br></a>";
        z= "Here are the some of the authentication security enhancement recommendations for you.<br>Click any of these to see their details.<br>"+c+adipass;
        c="";
        y = '<p>Hi, Im Stolen.<br> Im Privacy Enhancement Assistant.<br></p><p>You can check your privacy in the following below fields:<br></p><a href="#" onclick="checkPass(true);">Authentication</a><br><a href="#" onclick="checkbrowser(true);">Browsing the Web</a><br><a href="#" onclick="checkemail(true);">Email</a><br><a href="#" onclick="checkmessage(true);">Secure Messaging</a><br>';
    }
    data = document.getElementById('recommendations').innerHTML= z;
    console.log(data);
    document.getElementById("bot").innerHTML = y;

}

/*details function*/
function checkpass(answer) {
    if(answer==1) {
        x="";
        x="<p>Having a short or easily guessed password can be a security risk, as it can easily be cracked through brute force or guessed. To create a strong password, it's best to make it long (at least 12 characters) and include a 'passphrase' made up of many words. Alternatively, you can use a password generator to create a long, random password. To get an understanding of how quickly common passwords can be cracked, try the HowSecureIsMyPassword.net website. For more information on creating secure passwords, visit securityinabox.org.<p>";
       
    }
    else if(answer==2) {
        x="";
        x="<p>If an individual has reused a password and one of their accounts is exposed due to a data breach, a perpetrator can easily gain access to the other accounts that share the same password through an automated process known as Credential Stuffing. To avoid this, a person should make sure to use a different password for each of their online accounts.<p>"
    }
    else if(answer==3) {
        x="";
        x="<p>For the majority of people, it will be almost impossible to recall hundreds of secure and individual passwords. A password manager is an app that generates and stores your login information and then autofills it for you. All of your passwords will be encrypted with one master password (which must be memorized and made very strong). These password managers have browser extensions and mobile apps, allowing you to auto-fill your passwords on whichever device you are using. A great all-around choice is BitWarden; otherwise, there are other recommended password managers available.<p>"
    }
    else if(answer==4) {
        x="";
        x="<p>It is not recommended to share access to an account with another person, as it increases the risk of the account being hacked. If, however, it is necessary to share a password, such as when working on a team with a shared account, it should be done via the features of a password manager.<p>"
    }
    else if(answer==5) {
        x="";
        x="<p>Two-factor authentication (2FA) is a way to add an extra layer of security to your accounts. This requires two pieces of information - something you know (such as a password) and something you have (such as a code on your phone) - in order to log in. By having both of these, it makes it harder for someone to access your account if they have managed to get your password from a malicious source. To get started, you need to download an authenticator app to your phone and follow the steps in your account security settings to enable 2FA. When you log in on a new device, you will be asked to enter the code that appears in the app on your phone. This code usually changes every 30 seconds and works even without an internet connection.<p>"
    }
    else if(answer==6) {
        x="";
        x="<p>It is not recommended to take advantage of the feature in modern browsers that offers to save your passwords when logging in to any site, as they may not always be encrypted and this could create a security risk. A better solution is to use a dedicated password manager to store and automatically fill in your passwords.<p>"
    }
    else if(answer==7) {
        x="";
        x="<p>It is not recommended to sign into other people's computers due to the potential of their system having malicious software. Public computers are especially dangerous when logging into important accounts like banking. If you must use someone else's device, make sure you open a private/ incognito browser session by using the shortcut Ctrl+Shift+N or Cmd+Shift+N. This will prevent the browser from saving your browsing data, credentials, and cookies.<p>"
    }
    else if(answer==8) {
        x="";
        x="<p>Some websites enable you to set up password hints. Unfortunately, it is usually not difficult to guess the answers. If password hints are required, it is best to provide random answers and save them in a password manager.<p>"
    }
    else if(answer==9) {
        x="";
        x="<p>It is recommended that you use a longer text password or pin instead of a short numerical one when accessing your smartphone or computer. Short numeric pins are easier to crack, as 4-digit pins only have 10,000 combinations compared to 7.4 million for a 4-character alpha-numeric code.<p>"
    }
    else if(answer==10) {
        x="";
        x="<p>It is not recommended to use the same password manager for both primary and two-factor authentication (2FA) purposes, since this would create a single point of failure if the password manager were to become compromised. Instead, it is best to use a separate authenticator app on a mobile device or laptop to generate 2FA codes.<p>"
    }
    var data = document.getElementById('details').innerHTML = x;
    console.log(data);
}
/*

Browsing the Web

*/
function checkbrowser(answer) {
    if(answer) {
        document.getElementById("bot").innerHTML = "<p>Did you block Ads?</p><a href='#' onclick='checkbro1(true);'> Yes  </a><a href='#' onclick='checkbro1(false);'> No</a>";
    } 
}    
function checkbro1(answer) {
    if(answer) {
        y= "<p>Do you ensure the legitimity of all websites?</p><a href='#' onclick='checkbro2(true);'> Yes </a><a href='#' onclick='checkbro2(false);'> No</a>";

    } else {
        y = "<p>Do you ensure the legitimity of all websites?</p><a href='#' onclick='checkbro2(true);'> Yes </a><a href='#' onclick='checkbro2(false);'> No</a>";
        c=c+' * <a href="#" onclick="checkbro(1);">Block Adds through browser addon or through Ad-blocker.<br></a>';
    }
    document.getElementById("bot").innerHTML = y;
}
function checkbro2(answer) {
    if(answer) {
        y = "<p> Do you use the privacy-respecting brower?</p><a href='#' onclick='checkbro3(true);'> Yes </a><a href='#' onclick='checkbro3(false);'> No</a>";
        
    } else {
        y = "<p>Do you use the privacy-respecting brower?</p><a href='#' onclick='checkbro3(true);'> Yes </a><a href='#' onclick='checkbro3(false);'> No</a>";
        c=c+" * <a href='#' onclick='checkbro(2);'>Always ensure the Legitimity of the website<br></a>";
    }
    document.getElementById("bot").innerHTML = y;
}
function checkbro3(answer) {
    if(answer) {
        y = "<p>Do you check for Https?</p><a href='#' onclick='checkbro4(true);'> Yes </a><a href='#' onclick='checkbro4(false);'> No</a>";
    } 
    else {
        c=c+" * <a href='#' onclick='checkbro(3);'>Only use privacy-respecting browsers.<br></a>";
        y = "<p>Do you check for Https??</p><a href='#' onclick='checkbro4(true);'> Yes </a><a href='#' onclick='checkbro4(false);'> No</a>";
       
    }
    document.getElementById("bot").innerHTML = y;
}
function checkbro4(answer) {
    if(answer) {
        y = "<p> Do you block third-party Cookies?</p><a href='#' onclick='checkbro5(true);'> Yes </a><a href='#' onclick='checkbro5(false);'> No</a>";
        
    } else {
        y = "<p> Do you block third-party Cookies??</p><a href='#' onclick='checkbro5(true);'> Yes </a><a href='#' onclick='checkbro5(false);'> No</a>";
        c=c+" * <a href='#' onclick='checkbro(4);'>Only use Https website.<br></a>";
    }
    document.getElementById("bot").innerHTML = y;
}
function checkbro5(answer) {
    if(answer && c=="") {
        z = "Congragulation!!! You are in a secure state"+adibro;
        y = '<p>Hi, Im Stolen.<br> Im Privacy Enhancement Assistant.<br></p><p>You can check your privacy in the following below fields:<br></p><a href="#" onclick="checkPass(true);">Authentication</a><br><a href="#" onclick="checkbrowser(true);">Browsing the Web</a><br><a href="#" onclick="checkemail(true);">Email</a><br><a href="#" onclick="checkmessage(true);">Secure Messaging</a><br>';
    }
    else if(answer && c!="") {
         z= "Here are the some of the authentication security enhancement recommendations for you.<br>Click any of these to see their details.<br>"+c+adibro;
        c="";
        y = '<p>Hi, Im Stolen.<br> Im Privacy Enhancement Assistant.<br></p><p>You can check your privacy in the following below fields:<br></p><a href="#" onclick="checkPass(true);">Authentication</a><br><a href="#" onclick="checkbrowser(true);">Browsing the Web</a><br><a href="#" onclick="checkemail(true);">Email</a><br><a href="#" onclick="checkmessage(true);">Secure Messaging</a><br>';
     } 
    else {
        c=c+" * <a href='#' onclick='checkbro(5);'>Block Third-Party-Cookies.<br></a>";
        z= "Here are the some of the authentication security enhancement recommendations for you.<br>Click any of these to see their details.<br>"+c+adibro;
        c="";
        y = '<p>Hi, Im Stolen.<br> Im Privacy Enhancement Assistant.<br></p><p>You can check your privacy in the following below fields:<br></p><a href="#" onclick="checkPass(true);">Authentication</a><br><a href="#" onclick="checkbrowser(true);">Browsing the Web</a><br><a href="#" onclick="checkemail(true);">Email</a><br><a href="#" onclick="checkmessage(true);">Secure Messaging</a><br>';
    }
    data = document.getElementById('recommendations').innerHTML= z;
    console.log(data);
    document.getElementById("bot").innerHTML = y;

}

/*details function*/
function checkbro(answer) {
    if(answer==1) {
        x="";
        x="<p>Using an ad-blocker can help to protect your privacy by stopping the trackers that are present in advertisements. uBlock Origin, created by Raymond Hill, is an open source and highly effective browser extension. Ads can be used to collect personal information about you, such as your preferences and usage habits, and then be sold or used to show you more targeted ads. Additionally, some ads can be malicious or fake. By blocking ads, you can benefit from faster loading times, reduced data usage, and a less cluttered browsing experience.<p>";
    }   
    else if(answer==2) {
        x="";
        x="<p>When accessing any of your online accounts, it is essential to make sure that the URL you are using is correct. Storing commonly visited websites in your bookmarks can make it easier to find the correct URL. When visiting a new website, take note of any browser warnings, redirects, on-site spam, or pop-ups as these may indicate that the site is not safe. If you are uncertain, you can use a tool like Virus Total URL Scanner, IsLegitSite, or Google Safe Browsing Status to check the website's safety.<p>"
    }
    else if(answer==3) {
        x="";
        x="<p>Both Firefox and Brave are great options for browsing the internet securely and with respect for your privacy. They are speedy, open source and accessible from any device. It is advisable to avoid Chrome, Edge, and Safari, as they are all prone to data collection, tracking, and other intrusive activity if not properly configured. Firefox can be made even more secure through the addition of tweaks such as arkenfox or 12byte's user.js configs.<p>"
    }
    else if(answer==4) {
        x="";
        x="<p>If you enter details on a website which is not using HTTPS, this data can be read by anyone who is able to intercept the transfer. It is therefore important to avoid entering any information on a website which does not use HTTPS. However, just because a website has an SSL certificate does not guarantee it is reliable or trustworthy.The Electronic Frontier Foundation (EFF) used to have a browser extension called 'HTTPS Everywhere' which enabled HTTPS on websites, however, this has now been deprecated as most browsers have integrated similar protections. Instructions are available for Firefox, Chrome, Edge and Safari browsers on how to enable their secure HTTPS protections.<p>"
    }
    else if(answer==5) {
        x="";
        x="<p>This guide will demonstrate how one can disable third-party cookies, which are cookies placed on your device by a website other than the one you are currently visiting. This can be a privacy risk, as a third entity can collect data from your current session. To ensure this has been successful, it is possible to check for any cookies that have been placed.<p>"
    }
    else if(answer==6) {
        x="";
        x="<p>In certain cases, redirects may be used maliciously in phishing attacks to make malicious links appear legitimate. To safeguard against this, it is recommended to disable redirects in your browser settings, or use a tool like RedirectDetective to verify the URL before clicking a link.<p>"
    }
    else if(answer==7) {
        x="";
        x="<p>Drive-by downloads are a commonly used method for malicious files to be placed on a user's device. To minimize the risk, one should disable automatic downloads, and be aware of websites that ask to download files without warning.<p>"
    }
    else if(answer==8) {
        x="";
        x="<p>Location Services allows websites to request your exact physical location in order to improve your user experience. It is recommended to turn this feature off in your settings (refer to instructions on how to do so). However, there are still other ways that your approximate location can be determined (e.g. IP address, time zone, device information, DNS etc).<p>"
    }
    else if(answer==9) {
        x="";
        x="<p>Verify the security settings on your web browser to make sure no sites are allowed permission to use your webcam or microphone. Furthermore, it is advisable to implement physical safeguards such as webcam covers and microphone blockers.<p>"
    }
    else if(answer==10) {
        x="";
        x="<p>It is not recommended to allow your web browser to save usernames and passwords, as they can be easily seen or accessed. Google Chrome does protect this data with Windows credentials, yet these can be easily obtained by using password reset tools, like the Offline NT Password and Registry Editor. A better option is to use a password manager.<p>"
    }
    
    var data = document.getElementById('details').innerHTML = x;
    console.log(data);
}


