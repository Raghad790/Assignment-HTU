//scenario-1
let st1 =
  "lordffgfnjbfbf,bnvknbhjdgvugduvgkdgvydskgvdvdvilsdavhdivh;dnkbngknbknbfnbjfnkbfkbkfnbknfkjnbfnbnfkbnfnbjfnjbnkjfnbkjnfkjbnfkjnbkjfnbkjnfkjbnfkjnbjkfnbjfnjbnfjnbjfnbjfnbknfkjnbkfnbkfkbnfkjnbkjfnkjbnfkjbkjfnbfbjfnbkfbkjfnbkjfnbfljbnfjlnbkfnkvbhnjk,mnbvcvbnmk,iuytredfvgbhnjmk,mnbvcxdsertyuioddbbdhbvdbvbdvd.vmldv.mdvmll evjvvevnenbkvndkjnbdnbdlvdvnldnvldnlvj";

function tweetLength(st1) {
  if (st1.length > 280) {
    return "Tweet exceeds the 280-character limit!";
  } else {
    return "Tweet is within the limit.";
  }
}

console.log(tweetLength(st1));

//scenario-2
let username = "Raghad";
function usernameValid(username) {
  return username.charAt(0).toUpperCase() + username.slice(1);
}
console.log(usernameValid(username));

//scenario-3
let title = "JavaScript World";
function titleValid(title) {
  return title.toUpperCase();
}
console.log(titleValid(title));

//scenario-4
function cleanEmail(email) {
  return email.trim();
}

console.log(cleanEmail("   user@example.com   "));

//scenario-5
function shortPreview(st1) {
  return st1.slice(0, 40) + "........";
}

console.log(shortPreview(st1));

//scenario-6
function maskPhone(phone) {
  return "*** *** *" + phone.substring(phone.length - 4);
}

console.log(maskPhone("0795148736"));

//scenario-7&10
function checkBadWords(str) {
  if (str.includes("badWords")) {
    return str.replaceAll("badWords", "**********");
  }
  return "approved words";
}
console.log(checkBadWords("hell0o badWords badWords uuu;nil,hu"));
//scenario-8
function splitComment(comment) {
  return comment.split(" ");
}
console.log(splitComment("This is Javascript world"));

//scenario-9
function isImageFile(file) {
  return file.endsWith(".jpg") || file.endsWith(".png");
}
console.log(isImageFile("file.jpg"));

//scenario-11
function createDivider(length) {
  return "-".repeat(length);
}
console.log(createDivider(50));
//scenario-12
function combineTitle(part1, part2) {
  return part1.concat("   ", part2);
}
console.log(combineTitle("Hello", "World"));

//scenario-13
function occurance(paragraph, keyword) {
  return {
    first: paragraph.indexOf(keyword),
    last: paragraph.lastIndexOf(keyword),
  };
}
console.log(
  occurance("This is a keyword in a paragraph with another keyword.", "keyword")
);
