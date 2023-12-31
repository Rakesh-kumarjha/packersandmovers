/*-----------------------------------------------------------------------------------

    Theme Name: Archic - Construction and Architecture HTML Template
    Description: Construction and Architecture HTML Template
    Author: Website Design Templates
    Version: 1.0
    
    ---------------------------------- */

!(function (t) {
  "use strict";
  var n = t(window);

  function a() {
    var e, a;
    (e = t(".full-screen")),
      (a = n.height()),
      e.css("min-height", a),
      (e = t("header").height()),
      (a = t(".screen-height")),
      (e = n.height() - e),
      a.css("height", e);
  }
  t("#preloader").fadeOut("normall", function () {
    t(this).remove();
  }),
    n.on("scroll", function () {
      var e = n.scrollTop(),
        a = t(".navbar-brand img"),
        o = t(".navbar-brand.logodefault img");
      e <= 50
        ? (t("header").removeClass("scrollHeader").addClass("fixedHeader"),
          a.attr("src", "../../favicon.png"))
        : (t("header").removeClass("fixedHeader").addClass("scrollHeader"),
          a.attr("src", "../../favicon.png")),
        o.attr("src", "../../favicon.png");
    }),
    n.on("scroll", function () {
      500 < t(this).scrollTop()
        ? t(".scroll-to-top").fadeIn(400)
        : t(".scroll-to-top").fadeOut(400);
    }),
    t(".scroll-to-top").on("click", function (e) {
      e.preventDefault(),
        t("html, body").animate(
          {
            scrollTop: 0,
          },
          600
        );
    }),
    t(".parallax,.bg-img").each(function (e) {
      t(this).attr("data-background") &&
        t(this).css(
          "background-image",
          "url(" + t(this).data("background") + ")"
        );
    }),
    t(".story-video").magnificPopup({
      delegate: ".video",
      type: "iframe",
    }),
    t(".source-modal").magnificPopup({
      type: "inline",
      mainClass: "mfp-fade",
      removalDelay: 160,
    }),
    n.resize(function (e) {
      setTimeout(function () {
        a();
      }, 500),
        e.preventDefault();
    }),
    0 !== t(".copy-clipboard").length &&
      (new ClipboardJS(".copy-clipboard"),
      t(".copy-clipboard").on("click", function () {
        var e = t(this);
        e.text();
        e.text("Copied"),
          setTimeout(function () {
            e.text("Copy");
          }, 2e3);
      })),
    a(),
    t(document).ready(function () {
      t(".portfolio-carousel").owlCarousel({
        loop: !0,
        responsiveClass: !0,
        autoplay: !0,
        autoplayTimeout: 5e3,
        smartSpeed: 1500,
        nav: !1,
        dots: !1,
        autoWidth: !0,
        center: !1,
        margin: 50,
        responsive: {
          0: {
            items: 1,
          },
          576: {
            items: 2,
          },
          768: {
            items: 3,
          },
          992: {
            items: 3,
          },
          1200: {
            items: 3,
          },
        },
      }),
        t(".portfolio-carousel2").owlCarousel({
          loop: !0,
          responsiveClass: !0,
          autoplay: !0,
          autoplayTimeout: 5e3,
          smartSpeed: 1500,
          nav: !1,
          dots: !1,
          center: !1,
          margin: 30,
          responsive: {
            0: {
              items: 1,
            },
            576: {
              items: 1,
            },
            768: {
              items: 2,
            },
            992: {
              items: 3,
            },
          },
        }),
        t(".slider-fade").owlCarousel({
          items: 1,
          loop: !0,
          dots: !1,
          margin: 0,
          nav: !1,
          navText: [
            "<span class='ti-arrow-left'></span>",
            "<span class='ti-arrow-right'></span>",
          ],
          autoplay: !0,
          smartSpeed: 1500,
          mouseDrag: !1,
          animateIn: "fadeIn",
          animateOut: "fadeOut",
          responsive: {
            992: {
              nav: !0,
            },
          },
        }),
        t(".owl-carousel").owlCarousel({
          items: 1,
          loop: !0,
          dots: !1,
          margin: 0,
          autoplay: !0,
          smartSpeed: 500,
        }),
        t(".slider-fade").on("changed.owl.carousel", function (e) {
          e = e.item.index - 2;
          t("span").removeClass("animated fadeInUp"),
            t("h1").removeClass("animated fadeInUp"),
            t("p").removeClass("animated fadeInUp"),
            t("a").removeClass("animated fadeInUp"),
            t(".owl-item")
              .not(".cloned")
              .eq(e)
              .find("span")
              .addClass("animated fadeInUp"),
            t(".owl-item")
              .not(".cloned")
              .eq(e)
              .find("h1")
              .addClass("animated fadeInUp"),
            t(".owl-item")
              .not(".cloned")
              .eq(e)
              .find("p")
              .addClass("animated fadeInUp"),
            t(".owl-item")
              .not(".cloned")
              .eq(e)
              .find("a")
              .addClass("animated fadeInUp");
        }),
        0 !== t(".horizontaltab").length &&
          t(".horizontaltab").easyResponsiveTabs({
            type: "default",
            width: "auto",
            fit: !0,
            tabidentify: "hor_1",
            activate: function (e) {
              var a = t(this),
                o = t("#nested-tabInfo");
              t("span", o).text(a.text()), o.show();
            },
          }),
        t(".countup").counterUp({
          delay: 25,
          time: 2e3,
        }),
        t(".countdown").countdown({
          date: "01 June 2025 00:01:00",
          format: "on",
        }),
        t(".current-year").text(new Date().getFullYear());
    }),
    n.on("load", function () {
      t(".portfolio-gallery").lightGallery(),
        t(".portfolio-link").on("click", (e) => {
          e.stopPropagation();
        });
    });
})(jQuery);
