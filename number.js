function numbersToWords(x) {
  let numberArray1 = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  let numberArray2 = [
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  let numberArray3 = [
    'ten',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];

  let numberArray4 = [
    'one hundred',
    'two hundred',
    'three hundred',
    'four hundred',
    'five hundred',
    'six hundred',
    'seven hundred',
    'eight hundred',
    'nine hundred',
  ];

  if (x <= 9) {
    console.log(numberArray1[x]);
  } else if (x > 10 && x <= 19) {
    let numberString = x.toString();
    let newNumber = numberString[1];
    newNumber = newNumber - 1;
    console.log(numberArray2[newNumber]);
  } else if (
    (x > 9 && x <= 10) ||
    (x > 19 && x <= 20) ||
    (x > 29 && x <= 30) ||
    (x > 39 && x <= 40) ||
    (x > 49 && x <= 50) ||
    (x > 59 && x <= 60) ||
    (x > 69 && x <= 70) ||
    (x > 79 && x <= 80) ||
    (x > 89 && x <= 90)
  ) {
    let numberString = x.toString();
    let newNumber = numberString[0];
    newNumber = newNumber - 1;
    let result = numberArray3[newNumber];
    console.log(result);
  } else if (
    (x > 20 && x <= 29) ||
    (x > 30 && x <= 39) ||
    (x > 40 && x <= 49) ||
    (x > 50 && x <= 59) ||
    (x > 60 && x <= 69) ||
    (x > 70 && x <= 79) ||
    (x > 80 && x <= 89) ||
    (x > 90 && x <= 99)
  ) {
    let numberString = x.toString();
    let newNumber1 = numberString[0];
    newNumber1 = newNumber1 - 1;
    let newNumber2 = numberString[1];
    let result = numberArray3[newNumber1] + ' ' + numberArray1[newNumber2];
    console.log(result);
  } else if (
    (x > 99 && x <= 100) ||
    (x > 199 && x <= 200) ||
    (x > 299 && x <= 300) ||
    (x > 399 && x <= 400) ||
    (x > 499 && x <= 500) ||
    (x > 599 && x <= 600) ||
    (x > 699 && x <= 700) ||
    (x > 799 && x <= 800) ||
    (x > 899 && x <= 900)
  ) {
    let numberString = x.toString();
    let newNumber = numberString[0];
    newNumber = newNumber - 1;
    let result = numberArray4[newNumber];
    console.log(result);
  } else if (
    (x > 109 && x <= 110) ||
    (x > 209 && x <= 210) ||
    (x > 309 && x <= 310) ||
    (x > 409 && x <= 410) ||
    (x > 509 && x <= 510) ||
    (x > 609 && x <= 610) ||
    (x > 709 && x <= 710) ||
    (x > 809 && x <= 810) ||
    (x > 909 && x <= 910) ||
    (x > 119 && x <= 120) ||
    (x > 219 && x <= 220) ||
    (x > 319 && x <= 320) ||
    (x > 419 && x <= 420) ||
    (x > 519 && x <= 520) ||
    (x > 619 && x <= 620) ||
    (x > 719 && x <= 720) ||
    (x > 819 && x <= 820) ||
    (x > 919 && x <= 920) ||
    (x > 129 && x <= 130) ||
    (x > 229 && x <= 230) ||
    (x > 329 && x <= 330) ||
    (x > 429 && x <= 430) ||
    (x > 529 && x <= 530) ||
    (x > 629 && x <= 630) ||
    (x > 729 && x <= 730) ||
    (x > 829 && x <= 830) ||
    (x > 929 && x <= 930) ||
    (x > 139 && x <= 140) ||
    (x > 239 && x <= 240) ||
    (x > 339 && x <= 340) ||
    (x > 439 && x <= 440) ||
    (x > 539 && x <= 540) ||
    (x > 639 && x <= 640) ||
    (x > 739 && x <= 740) ||
    (x > 839 && x <= 840) ||
    (x > 939 && x <= 940) ||
    (x > 149 && x <= 150) ||
    (x > 249 && x <= 250) ||
    (x > 349 && x <= 350) ||
    (x > 449 && x <= 450) ||
    (x > 549 && x <= 550) ||
    (x > 649 && x <= 650) ||
    (x > 749 && x <= 750) ||
    (x > 849 && x <= 850) ||
    (x > 949 && x <= 950) ||
    (x > 159 && x <= 160) ||
    (x > 259 && x <= 260) ||
    (x > 359 && x <= 360) ||
    (x > 459 && x <= 460) ||
    (x > 559 && x <= 560) ||
    (x > 659 && x <= 660) ||
    (x > 759 && x <= 760) ||
    (x > 859 && x <= 860) ||
    (x > 959 && x <= 960) ||
    (x > 169 && x <= 170) ||
    (x > 269 && x <= 270) ||
    (x > 369 && x <= 370) ||
    (x > 469 && x <= 470) ||
    (x > 569 && x <= 570) ||
    (x > 669 && x <= 670) ||
    (x > 769 && x <= 770) ||
    (x > 869 && x <= 870) ||
    (x > 969 && x <= 970) ||
    (x > 179 && x <= 180) ||
    (x > 279 && x <= 280) ||
    (x > 379 && x <= 380) ||
    (x > 479 && x <= 480) ||
    (x > 579 && x <= 580) ||
    (x > 679 && x <= 680) ||
    (x > 779 && x <= 780) ||
    (x > 879 && x <= 880) ||
    (x > 979 && x <= 980) ||
    (x > 189 && x <= 190) ||
    (x > 289 && x <= 290) ||
    (x > 389 && x <= 390) ||
    (x > 489 && x <= 490) ||
    (x > 589 && x <= 590) ||
    (x > 689 && x <= 690) ||
    (x > 789 && x <= 790) ||
    (x > 889 && x <= 890) ||
    (x > 989 && x <= 990)
  ) {
    let numberString = x.toString();
    let newNumber1 = numberString[0];
    newNumber1 = newNumber1 - 1;
    let newNumber2 = numberString[1];
    newNumber2 = newNumber2 - 1;
    let result = numberArray4[newNumber1] + ' ' + numberArray3[newNumber2];
    console.log(result);
  } else if (
    (x > 100 && x <= 109) ||
    (x > 200 && x <= 209) ||
    (x > 300 && x <= 309) ||
    (x > 400 && x <= 409) ||
    (x > 500 && x <= 509) ||
    (x > 600 && x <= 609) ||
    (x > 700 && x <= 709) ||
    (x > 800 && x <= 809) ||
    (x > 900 && x <= 909)
  ) {
    let numberString = x.toString();
    let newNumber1 = numberString[0];
    newNumber1 = newNumber1 - 1;
    let newNumber2 = numberString[2];
    let result = numberArray4[newNumber1] + ' ' + numberArray1[newNumber2];
    console.log(result);
  } else if (
    (x > 110 && x <= 119) ||
    (x > 210 && x <= 219) ||
    (x > 310 && x <= 319) ||
    (x > 410 && x <= 419) ||
    (x > 510 && x <= 519) ||
    (x > 610 && x <= 619) ||
    (x > 710 && x <= 719) ||
    (x > 810 && x <= 819) ||
    (x > 910 && x <= 919)
  ) {
    let numberString = x.toString();
    let newNumber1 = numberString[0];
    newNumber1 = newNumber1 - 1;
    let newNumber2 = numberString[2];
    newNumber2 = newNumber2 - 1;
    let result = numberArray4[newNumber1] + ' ' + numberArray2[newNumber2];
    console.log(result);
  } else if (
    (x > 120 && x <= 129) ||
    (x > 220 && x <= 229) ||
    (x > 320 && x <= 329) ||
    (x > 420 && x <= 429) ||
    (x > 520 && x <= 529) ||
    (x > 620 && x <= 629) ||
    (x > 720 && x <= 729) ||
    (x > 820 && x <= 829) ||
    (x > 920 && x <= 929) ||
    (x > 130 && x <= 139) ||
    (x > 230 && x <= 239) ||
    (x > 330 && x <= 339) ||
    (x > 430 && x <= 439) ||
    (x > 530 && x <= 539) ||
    (x > 630 && x <= 639) ||
    (x > 730 && x <= 739) ||
    (x > 830 && x <= 839) ||
    (x > 930 && x <= 939) ||
    (x > 140 && x <= 149) ||
    (x > 240 && x <= 249) ||
    (x > 340 && x <= 349) ||
    (x > 440 && x <= 449) ||
    (x > 540 && x <= 549) ||
    (x > 640 && x <= 649) ||
    (x > 740 && x <= 749) ||
    (x > 840 && x <= 849) ||
    (x > 940 && x <= 949) ||
    (x > 150 && x <= 159) ||
    (x > 250 && x <= 259) ||
    (x > 350 && x <= 359) ||
    (x > 450 && x <= 459) ||
    (x > 550 && x <= 559) ||
    (x > 650 && x <= 659) ||
    (x > 750 && x <= 759) ||
    (x > 850 && x <= 859) ||
    (x > 950 && x <= 959) ||
    (x > 160 && x <= 169) ||
    (x > 260 && x <= 269) ||
    (x > 360 && x <= 369) ||
    (x > 460 && x <= 469) ||
    (x > 560 && x <= 569) ||
    (x > 660 && x <= 669) ||
    (x > 760 && x <= 769) ||
    (x > 860 && x <= 869) ||
    (x > 960 && x <= 969) ||
    (x > 170 && x <= 179) ||
    (x > 270 && x <= 279) ||
    (x > 370 && x <= 379) ||
    (x > 470 && x <= 479) ||
    (x > 570 && x <= 579) ||
    (x > 670 && x <= 679) ||
    (x > 770 && x <= 779) ||
    (x > 870 && x <= 879) ||
    (x > 970 && x <= 979) ||
    (x > 180 && x <= 189) ||
    (x > 280 && x <= 289) ||
    (x > 380 && x <= 389) ||
    (x > 480 && x <= 489) ||
    (x > 580 && x <= 589) ||
    (x > 680 && x <= 689) ||
    (x > 780 && x <= 789) ||
    (x > 880 && x <= 889) ||
    (x > 980 && x <= 989) ||
    (x > 190 && x <= 199) ||
    (x > 290 && x <= 299) ||
    (x > 390 && x <= 399) ||
    (x > 490 && x <= 499) ||
    (x > 590 && x <= 599) ||
    (x > 690 && x <= 699) ||
    (x > 790 && x <= 799) ||
    (x > 890 && x <= 899) ||
    (x > 990 && x <= 999)
  ) {
    let numberString = x.toString();
    let newNumber1 = numberString[0];
    newNumber1 = newNumber1 - 1;
    let newNumber2 = numberString[1];
    newNumber2 = newNumber2 - 1;
    let newNumber3 = numberString[2];
    let result =
      numberArray4[newNumber1] +
      ' ' +
      numberArray3[newNumber2] +
      ' ' +
      numberArray1[newNumber3];
    console.log(result);
  } else console.log('Please enter any digit between 0 to 999');
}
numbersToWords(0);
