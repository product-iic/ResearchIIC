$(document).ready(function() {
    $("#read-more-toggle").click(function() {
        var elem = $("#read-more-toggle").text();
        if (elem == "Read More") {
            //Stuff to do when btn is in the read more state
            $("#read-more-toggle").text("Read Less");
            $("#read-more-text").css("display", "block");
            $("#read-more-text").slideDown();
        } else {
            //Stuff to do when btn is in the read less state
            $("#read-more-toggle").text("Read More");
            $("#read-more-text").css("display", "none");
            $("#read-more-text").slideUp();
        }
    });
});

$(document).ready(function() {
    $("#read-more-toggle-3").click(function() {
        var elem = $("#read-more-toggle-3").text();
        if (elem == "Read More") {
            //Stuff to do when btn is in the read more state
            $("#read-more-toggle-3").text("Read Less");
            $("#read-more-text-3").css("display", "block");
            $("#read-more-text-3").slideDown();
        } else {
            //Stuff to do when btn is in the read less state
            $("#read-more-toggle-3").text("Read More");
            $("#read-more-text-3").css("display", "none");
            $("#read-more-text-3").slideUp();
        }
    });
});

// Search JS

$(document).ready(function() {
    $(".search").keyup(function() {
        var searchTerm = $(".search").val();
        var listItem = $('.results tbody').children('tr');
        var searchSplit = searchTerm.replace(/ /g, "'):containsi('")

        $.extend($.expr[':'], {
            'containsi': function(elem, i, match, array) {
                return (elem.textContent || elem.innerText || '').toLowerCase().indexOf((match[3] || "").toLowerCase()) >= 0;
            }
        });

        $(".results tbody tr").not(":containsi('" + searchSplit + "')").each(function(e) {
            $(this).attr('visible', 'false');
        });

        $(".results tbody tr:containsi('" + searchSplit + "')").each(function(e) {
            $(this).attr('visible', 'true');
        });

        var jobCount = $('.results tbody tr[visible="true"]').length;
        $('.counter').text(jobCount + ' item');

        if (jobCount == '0') { $('.no-result').show(); } else { $('.no-result').hide(); }
    });
});

// Focus Automatically - Search Function

var inputField = document.getElementById('focus-auto');

inputField.addEventListener('mouseover', function() {
    inputField.focus();
});

// Collapse - Open All and Close All Accordion Function

$('.closeall').click(function() {
    $('.collapse')
        .collapse('hide');
});

$('.openall').click(function() {
    $('.collapse')
        .collapse('show');
});