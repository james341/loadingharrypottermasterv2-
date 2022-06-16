//       _           _    _                     _ 
//      | |         | |  | |                   | |
//   ___| | ___  ___| | _| |     ___   __ _  __| |
//  / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
//  \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
//  |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
//     version 2.16

// URL for the server logo
// Leave it blank to use text instead
// (Put the files in the images folder)
// (You can also use external URL)
var l_serverImage = "logo.png";

// Center logo?
// 'true' or 'false'
var l_centerLogo = false;

// Display current map and gamemode?
// 'true' or 'false'
var l_displayMapGamemode = true;

// Custom server name configuration
// Leave it blank for automatic server name
var l_serverName = "sleekLoad 2";

// Use a video for the background?
// Otherwise it will use images
// 'true' or 'false'
var l_bgVideo = false;

// Default available videos:
// "aurora.webm"
// "bluefall.webm"
// "bluetilefloor.webm"
// "bluewhitecircles.webm"
// "bokehlens.webm"
// "cleanbokeh.webm"
// "coldnight.webm"
// "colorfulburst.webm"
// "dancingstars.webm"
// "dropsflares.webm"
// "focusorangebokeh.webm"
// "glimmering.webm"
// "glowingrings.webm"
// "greencircles.webm"
// "hues.webm"
// "inthedeep.webm"
// "modernflourish.webm"
// "orangeaura.webm"
// "warminside.webm"
// "yellowgreen.webm"
//
// You can add your own video backgrounds
// Just make sure they are using webm VP8 format 
// (Place the videos in the backgrounds/videos folder)
// (You can also use external URL)
var l_background = "bluefall.webm";

// (Image-background only)
// Enable map-based background image?
// If enabled, the background will be an image based on the server current map
// You need to have a background image with the same name as the map
// Also, the image needs to be in .jpg format
// E.g: gm_flatgrass.jpg, gm_construct.jpg, rp_downtown_v4c_v2.jpg
// 'true' or 'false'
var l_bgImageMapBased = false;

// (Image-background only)
// Place one or more images
// Multiple images will automatically shuffle between them
// (Place the files in the backgrounds/images folder)
// (You can also use external URL)
var l_bgImages = [
	"image1.jpg",
        "image2.jpg",
        "image3.jpg",
        "image4.jpg",
        "image5.jpg",
        "image6.jpg",
        "image7.jpg",
        "image8.jpg",
        "image9.jpg",
        "image10.jpg",
        "image11.jpg",
        "image12.jpg",
        "image13.jpg",
        "image14.jpg",
        "image15.jpg",
        "image16.jpg",

];

// (Image-background only)
// Random background images order?
// 'true' or 'false'
var l_bgImagesRandom = true;

// (Image-background only)
// Delay between background images changes
// in milliseconds
var l_bgImageDuration = 5000;

// (Image-background only)
// Image background fade velocity
// in milliseconds
var l_bgImageFadeVelocity = 2000;

// Enable background overlay?
// 'true' or 'false'
var l_bgOverlay = true;

// Background darkening amount
// 0 for none (0%), 100 for pitch black (100%)
var l_bgDarkening = 50;

// Play music during the loading screen?
// 'true' or 'false'
var l_music = true;

// Display current music name?
// 'true' or 'false'
var l_musicDisplay = true;

// Music playlist
// Add as many youtube ids/urls or ogg files you want
// (Place the ogg files in the music folder)
// (You can also use external URL for the ogg files)
var l_musicPlaylist = [
	{ogg: "skyrimshit.ogg", name: "Nations - Installation Music"},
	{ogg: "hwgshitcunt.ogg", name: "Nations - Installation Music"},
	{ogg: "apparate!suit(withlyrics.ogg", name: "Nations - Installation Music"},
	{ogg: "leavinghogwarts.ogg", name: "Nations - Installation Music"},
	{ogg: "itsahwchrist.ogg", name: "Nations - Installation Music"},
	{ogg: "potterthemesong.ogg", name: "Nations - Installation Music"},
	{ogg: "potterthemesongtwo.ogg", name: "Nations - Installation Music"},
];

// Random music order?
// 'true' or 'false'
var l_musicRandom = true;

// Music volume
// Choose a value between 0 (quietest) and 100 (loudest)
var l_musicVolume = 15;

// Enable custom messages?
// 'true' or 'false'
var l_messagesEnabled = true;

// Enter your custom messages below
var l_messages = [
	"Do not use your microphone to: disrupt roleplay situations by spamming unnecessary phrases, such as my man; or play music, recorded, live, vocal, or instrumental!",
	"Do not joke about crashing the server. Doing so will result in a permanent ban!",
	"Mingeing In This Server Will Result In A Perma Ban!",
        "Do not exploit around the set AFK system that kicks anyone who is attempting to grind for XP!",
        "No racist / sexual references of any kind (both in message and/or discord usernames!",
	"No public outbursts of unnecessary drama -- if you have an issue, contact staff!",
	"Hold yourself accountable for your actions & mistakes - if you get in trouble, admit and work with staff to resolve it!",
	"One-on-one verbal conversation between the staff member and party in a private channel, with explanation of the infraction, and what next steps may be taken if the problem persists!",
	"No-Meta-Gaming!",
        "Do NOT threaten to DDoS the server - This will result in a perma ban, joke or not!", 
        "Mingeing Is Unacceptable Behavior And You Will Be Permanently Banned!",
        "Do Not Ask For Ranks Apply On The Forums!",
        "Students should never kill other students, teachers, Aurors, or OOTP intentionally. Accidents do happen or may be a result of crossfire, but avoid these at all costs!",
        "Passive roleplay; you may only Owlpost your passive roleplay if you are on an acceptable job and not just to communicate globally in RP!",
        "The Hufflepuff Basement requires tapping a specific barrel in a particular rhythm. Attempts to bypass these protective measures by members of other houses are considered serious offences!",
        "Prefects may enter faculty areas if investigating another student violating this rule!",
        "No being an Animagus, Parseltongue  or Metamorphmagi without permisson!",
        "Do not demote while the staff is online. If a staff member is online, report the rule-breaker like you normally would!",
		"Do not make extremely loud sounds with your microphone or repeatedly broadcasting for an extended period of time!",
        "Do not enter the Forbidden Forest without staff supervision. If you want a scene in the forest, put in a +request (and understand that there is a very good chance that your character will not survive!",
        "AN Roleplay reserves the right at any time without notice to revise these rules and guidelines by updating this posting. Players and staff agree to be bound by such revisions, and should periodically revisit this post to review the current rules and guidelines!",
	"Boys may not enter the girls' dormitories. Attempts to do so will trigger spells preventing it, such as a Slide Spell on the staircases in the Gryffindor and Ravenclaw rooms. The one exception to this is a male Prefect in an emergency!",
        "Access to common rooms and dormitories is strictly controlled!",
        "Do not attempt to clip or exploit outside of the set map boundaries. Bugs may be hidden and it may be an accident, but intentionally doing so or sharing is prohibited!",
        "Users should not specifically target or harass another player with malicious intentions!",
        "Do not take part in any action that would immediately break the conventions of your roleplay job. Examples can be found within the job description!"
];

// Random message order?
// 'true' or 'false'
var l_messagesRandom = true;

// Delay between message changes
// in milliseconds
var l_messagesDelay = 5000;

// Messages fade time
// in milliseconds
var l_messagesFade = 1000;

// Show errors inside Garry's Mod?
// Can be useful for finding errors
// 'true' or 'false'
var l_showErrorsIngame = true;

//==============================================================
//========================== WARNING ===========================
//==============================================================
//============ Do not edit anything below this line ============
//==============================================================
var checkConfigFile = function() {
	return true;
};
