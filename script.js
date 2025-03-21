$(document).ready(function () {
    $("#menu-toggle").click(function (event) {
        event.preventDefault();
        $("#sidebar").css("right", "0px");
    });

    $("#close-sidebar").click(function (event) {
        event.preventDefault();
        $("#sidebar").css("right", "-300px");
    });

    function scrollToSection(sectionId) {
        $('html, body').animate({
            scrollTop: $('#' + sectionId).offset().top
        }, 800);
    }
});

function openTab(tabName) {
    $(".info-section").hide();
    $("#" + tabName).show();
    $(".tab-button").removeClass("active");
    $("button[onclick='openTab(\"" + tabName + "\")']").addClass("active");
}




$(document).ready(function () {
    $("#writeMessageBtn").click(function () {
        $("#messageForm").toggle();
    });
});

let messages = [];

function addMessage() {
    let name = $("#userName").val();
    let title = $("#messageTitle").val();
    let content = $("#messageContent").val();
    let date = new Date().toISOString().split('T')[0];

    if (name && title && content) {
        let message = { name, title, content, date, likes: 0 };
        messages.unshift(message);
        updateMessages();
        $("#userName, #messageTitle, #messageContent").val("");
        $("#messageForm").hide();
    } else {
        alert("모든 항목을 입력해주세요!");
    }
}

function updateMessages() {
    let viewType = $(".view-toggle .active").attr("id") === "listViewBtn" ? "list" : "card";
    let messageContainer = $("#messageList");
    messageContainer.empty();

    messages.forEach((msg, index) => {
        let messageHTML = "";

        if (viewType === "list") {
            messageHTML = `
                <div class="message-item">
                    <strong>${msg.title}</strong> - ${msg.name} | ${msg.date}
                    <span class="heart-btn" onclick="likeMessage(${index})">❤️ ${msg.likes}</span>
                </div>
            `;
        } else {
            messageHTML = `
                <div class="message-item">
                    <h3>${msg.title}</h3>
                    <p>${msg.content}</p>
                    <small>${msg.name} | ${msg.date}</small>
                    <span class="heart-btn" onclick="likeMessage(${index})">❤️ ${msg.likes}</span>
                </div>
            `;
        }

        messageContainer.append(messageHTML);
    });
}

function toggleView(view) {
    $(".view-toggle button").removeClass("active");
    $("#" + (view === "list" ? "listViewBtn" : "cardViewBtn")).addClass("active");

    $("#messageList").removeClass("list-view card-view").addClass(view + "-view");
    updateMessages();
}

function likeMessage(index) {
    messages[index].likes += 1;
    updateMessages();
}
