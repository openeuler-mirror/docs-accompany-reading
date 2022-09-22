$(function ($) {
  $(".question").click(function (e) {
    if ($(".alert").css("display") === "none") {
      e.stopPropagation();
      $(".alert").slideToggle(500);
      $(".alert").css("display", "block");
    } else {
      $(".alert").slideToggle(500);
      $(".alert").css("display", "none");
    }
  });
  $(".alert .icon-close").on("click", function (e) {
    e.stopPropagation();
    $(".question").click();
    $(".alert").css("display", "none");
  });
  $(".submit-type .type-issue,.submit-type .type-PR").on("click", function () {
    if ($(this).hasClass("active-submit")) {
      $(this).removeClass("active-submit");
    } else {
      $(this).addClass("active-submit").siblings().removeClass("active-submit");
    }
  });
  $(".btn-submit").hover(
    function () {
      let submitType = $(".submit-type .active-submit>span").text();
      if (submitType === "issue") {
        $(".issue-submit-tip").addClass("tip-show");
      } else if (submitType === "PR") {
        $(".pr-submit-tip").addClass("tip-show");
      }
    },
    function () {
      $(".issue-submit-tip").removeClass("tip-show");
      $(".pr-submit-tip").removeClass("tip-show");
    }
  );
  $(".btn-submit").on("click", function () {
    let questionValue = $(".main-input").val().trim();
    let feedback = $(".issue-reason").val().trim();
    let submitType = $(".submit-type .active-submit>span").text();
    let checkedArr = [];
    $(".alert .active-border span").each(function (index) {
      checkedArr.push($(".alert .active-border span")[index].innerHTML);
    });
    let satisfaction = $(".satisfaction .active");
    let email = $(".email-input").val().trim();
    let reg = new RegExp(
      "^[a-z0-9A-Z]+[- | a-z0-9A-Z . _]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$"
    );
    let privacy = $(".privacy-box input[type='radio']:checked");
    // const regR = /[\r\n]+/g
    // const first=questionValue.split(regR)[0]
    const first="法律声明"
    if (!questionValue) {
      $(".first-input").focus();
      tipShow("请输入“有虫”片段", 0);
    } else if (!feedback || !submitType) {
      $(".issue-reason").focus();
      tipShow("请选择提交类型并输入问题描述", 1);
    } else if (!email) {
      tipShow("请输入您的邮箱", 3);
    } else if (!reg.test(email)) {
      tipShow("请输入正确的邮箱", 3);
    } else if (satisfaction.length === 0) {
      tipShow("请选择满意度", 2);
    } else if (privacy.length === 0) {
      tipShow("请勾选同意隐私声明", 5);
    } else {
      let postData = {
        bugDocFragment: questionValue,
        existProblem: checkedArr,
        problemDetail: feedback,
        comprehensiveSatisfication: parseInt(satisfaction.attr("key")),
        participateReason: "本职工作",
        email: email,
      };
      postData.link = window.location.href;
      let body = encodeURIComponent(issueTemplate(postData));
      try {
        if (submitType === "issue") {
          window.open(
            `https://gitee.com/openeuler/docs/issues/new?issue%5Bassignee_id%5D=0&issue%5Bmilestone_id%5D=0&title=有奖捉虫&description=${body}`
          );
        } else {
          window.open(
            `https://gitee.com/-/ide/project/openeuler/docs/edit/stable2-22.03_LTS/-/docs/zh/docs/Releasenotes/法律声明.md?search=${first}&title=文档捉虫-openEuler 22.03_LTS-法律声明&description=${feedback}&message=${feedback}&label_names=文档捉虫`
          );
        }
      } catch (error) {
        console.error(error);
      }
    }
  });
  let template = "";
  for (let i = 1; i <= 10; i++) {
    let rank = "";
    if (i <= 6) {
      rank = "失望";
    } else if (i > 6 && i <= 8) {
      rank = "一般";
    } else {
      rank = "满意";
    }
    template =
      template +
      `<div class="score" key="${i}">${i}<div class="score-detail" ">${rank}</div></div>`;
  }
  $(".score-box").html(template);
  $(".evaluates .issue").on("click", function () {
    let oldValue = $(".issue-reason").val();
    let text = `\n${this.childNodes[1].innerHTML}:\n`;
    let preTag = null;
    if ($(".active-border").length) {
      preTag = `\n${$(".active-border")[0].childNodes[1].innerHTML}:\n`;
    }
    let itemtext =
      text +
      $(this)
        .find(".issue-detail")
        .text()
        .replace(/\s+/gi, "")
        .replaceAll("；", "\n")
        .replaceAll("●", "");
    let preText = null;
    if ($(".active-border").length) {
      preText =
        preTag +
        $(".active-border .issue-detail")
          .text()
          .replace(/\s+/gi, "")
          .replaceAll("；", "\n")
          .replaceAll("●", "");
    }
    text = oldValue + itemtext;
    if ($(this).hasClass("active-border")) {
      text = text.replaceAll(itemtext.trim(), "");
      $(this).removeClass("active-border");
    } else {
      preText ? (text = text.replaceAll(preText.trim(), "")) : "";
      $(this).addClass("active-border").siblings().removeClass("active-border");
    }
    text = text.trim();
    let count = "";
    if (text.trim().length > 500) {
      $(".issue-reason").val(text.trim().substring(0, 500));
    } else if (text.length === 0) {
      $(".issue-reason").val("");
    } else {
      $(".issue-reason").val(`${text.trim()}\n`);
    }
    count = $(".issue-reason").val().length;
    $("#text-count-tow").text(count);
  });
  $(".satisfaction .score").on("click", function () {
    $(this).addClass("active");
    $(this).siblings(".score").removeClass("active");
  });
  $(".first-input").on("input propertychange", function () {
    let _val = $(this).val();
    let count = "";
    if (_val.length > 500) {
      $(this).val(_val.substring(0, 500));
    }
    count = $(this).val().length;
    $("#text-count").text(count);
  });
  $(".issue-reason").on("input propertychange", function () {
    (_val = $(this).val()), (count = "");
    if (_val.length > 500) {
      $(this).val(_val.substring(0, 500));
    }
    count = $(this).val().length;
    $("#text-count-tow").text(count);
  });
  $("#privacy").click(function () {
    let $radio = $(this);
    if ($radio.data("checked")) {
      $radio.prop("checked", false);
      $radio.data("checked", false);
      $(".submit-tip").css("display", "none");
      $(".login-tip").css("display", "none");
    } else {
      $radio.prop("checked", true);
      $radio.data("checked", true);
      $(".submit-tip").css("display", "block");
      $(".login-tip").css("display", "block");
    }
  });
});

function tipShow(value, index) {
  if (index === 5) {
    $(".privacy-box").addClass("shake1");
    setTimeout(function () {
      $(".privacy-box").removeClass("shake1");
    }, 1000);
  } else if (index === 3) {
    let tipBox = $("<div class='tip-box shake'></div>");
    $(".text-email")[0].appendChild(tipBox[0]);
    $(".tip-box").text(value).slideToggle(500);
    setTimeout(function () {
      $(".tip-box").slideToggle("slow");
      setTimeout(function () {
        $(".tip-box").remove();
      }, 500);
    }, 2500);
  } else {
    let tipBox = $("<div class='tip-box shake'></div>");
    $(".title-h3")[index].appendChild(tipBox[0]);
    $(".tip-box").text(value).slideToggle(500);
    setTimeout(function () {
      $(".tip-box").slideToggle("slow");
      setTimeout(function () {
        $(".tip-box").remove();
      }, 500);
    }, 2500);
  }
}

window.onload = function () {
  function selectText() {
    if (document.selection) {
      return document.selection.createRange().text;
    } else {
      return window.getSelection().toString();
    }
  }
  let content = document.querySelector("#content");
  let feedback = document.querySelector(".feedback");
  content.onmouseup = function (event) {
    let ev = event || window.event;
    let left = ev.clientX;
    let top = ev.clientY;
    let select = selectText().trim();
    setTimeout(function () {
      if (
        select.length > 0 &&
        window.getSelection() &&
        window.getSelection().type === "Range"
      ) {
        feedback.style.display = "block";
        feedback.style.left = left + "px";
        feedback.style.top = top + "px";
      } else {
        feedback.style.display = "none";
      }
    }, 100);
  };
  content.onclick = function (ev) {
    ev = ev || window.event;
    ev.cancelBubble = true;
  };
  document.onclick = function () {
    feedback.style.display = "none";
  };

  feedback.onclick = function (e) {
    e.stopPropagation();
    let count = "";
    if (selectText().trim().length > 500) {
      $(".first-input").val(selectText().trim().substring(0, 500));
    } else {
      $(".first-input").val(selectText().trim());
    }
    count = 500 - $(".first-input").val().length;
    $("#text-count").text(count);
    $(".question").click();
  };
};

function issueTemplate(data) {
  let Problem = "";
  data.existProblem.length
    ? (Problem = `- ${data.existProblem.join("、")}`)
    : "";
  return `1. 【文档链接】

> ${data.link}

2. 【"有虫"文档片段】

> ${data.bugDocFragment.replace(/(\r\n|\r|\n)+/g, "$1")}

3. 【存在的问题】

${Problem}
> ${data.problemDetail.replace(/(\r\n|\r|\n)+/g, "$1")}

4. 【预期结果】
- 请填写预期结果`;
}
