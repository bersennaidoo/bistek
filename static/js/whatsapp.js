var url = 'https://cdn.jsdelivr.net/gh/iammunendrasingh/free-whatsapp-chat-widget@main/main.js';
var s = document.createElement("script");
s.type = "text/javascript";
s.async = true;
s.src = url;
var options = {
  enabled: true,
  chatButtonSetting: {
    backgroundColor: "#4DC247",
    ctaText: "WhatsApp Us",
    borderRadius: "25",
    marginLeft: "",
    marginBottom: "30",
    marginRight: "30",
    position: "right",
  },
  brandSetting: {
    brandName: "Bistek",
    brandSubTitle: "Typically replies within 24 hrs",
    brandImg:
      "https://iframeweb.com/wp-content/uploads/2023/10/iframeweb-logo.jpg",
    welcomeText: "Hi there!\nHow can we help you?",
    messageText: "Hello, I have a question about {{page_link}}",
    backgroundColor: "#404145",
    ctaText: "Start Chat",
    borderRadius: "25",
    autoShow: true,
    phoneNumber: "+27817995928",
  },
};
s.onload = function () {
  CreateWhatsappChatWidget(options);
};
var x = document.getElementsByTagName("script")[0];
x.parentNode.insertBefore(s, x);
