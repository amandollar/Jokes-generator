const jokesArray= [
    "A pair of cows were talking in the field. One says, 'Have you heard about the mad cow disease that’s going around?' 'Yeah,' the other cow says. 'Makes me glad I’m a penguin.'",
    '"Once, my father came home and found me in front of a roaring fire. That made my father very mad, as we didn’t have a fireplace." —Victor Borge',
    '"Your mother has been with us for 20 years," said John. "Isn’t it time she got a place of her own?" "My mother?" replied Helen. "I thought she was your mother." —Joseph Lozanoff',
    'Why don’t pirates take a shower before they walk the plank? They just wash up on shore.',
    'In Denver, the members of a Sunday­-school class were asked to set down their favorite biblical truths. One youngster laboriously printed: “Do one to others as others do one to you.” —Lee Olson, The Denver Post',
    'According to unofficial sources, a new simplified income-tax form contains only four lines: 1. What was your income for the year? 2. What were your expenses? 3. How much have you left? 4. Send it in. —The Link',
    'One of the oddities of Wall Street is that it is the dealer and not the customer who is called broker. —Dallas News',
    'Two Hollywood stars ran into each other at the door of their psychiatrist’s office. "Hello, there," said one. "Are you coming or going?" "If I knew that," said the other, "I wouldn’t be here." —The American Weekly',
    'At a party, a young wife admonished her husband, "That’s the fourth time you’ve gone back for ice cream and cake. Doesn’t it embarrass you?" "Why should it?" answered her spouse. "I keep telling them it’s for you." —Selma Glasser, Good Housekeeping',
    'A grasshopper walks into a bar. The bartender looks at him and says, "Hey, they named a drink after you!" "Really?" replies the grasshopper. "There’s a drink named Stan?"',
    'You can’t believe everything you hear—but you can repeat it.',
    'A Hollywood hostess, giving instructions to a new maid just before a party, cautioned: "Now remember, Marie, when you serve my guests, don’t wear any jewelry." "I haven’t anything valuable, madam," answered the maid. "But thanks for the warning just the same." —Peggy McEvoy',
    'A teenager brings her new boyfriend home to meet her parents. They’re appalled by his haircut, his tattoos, his piercings. Later, the girl’s mom says, "Dear, he doesn’t seem to be a very nice boy." "Oh, please, Mom!" says the daughter. "If he wasn’t nice, would he be doing 500 hours of community service?" —Maria Salmon',
    'Every time a little boy went to a playmate’s house, he found the friend’s grandmother deeply engrossed in her Bible. Finally his curiosity got the better of him. "Why do you suppose your grandmother reads the Bible so much?" he asked. "I’m not sure," said his friend, "but I think she’s cramming for her finals." —Carl T. Schuneman',
    'A gawky lad from New England came to New York with his girl, and took her to nearby Playland Amusement Park. They had heard a lot about the Tunnel of Love and were especially anxious to try it out. But when they got home, the kids expressed disappointment. "Shucks," the boy said, "it was dark and damp and uncomfortable. Besides, we got soaking wet." "How come?" asked a friend. "Did the boat leak?" The kid looked amazed. "There’s a boat?" —J.D. Theus',
    'On a Miami­ to Chicago flight was a lively youngster who nearly drove everyone crazy. He was running up and down the aisle when the flight attendant started serving coffee. He ran smack into her, knocking a cup of coffee out of her hand and onto the floor. As he stood by watching her clean up the mess, she glanced up at the boy and said, "’Look, why don’t you go and play outside?"’ —Eugene Carroll'
  ];
  




const changeText = () => {
  let randomJokes = jokesArray[Math.floor(Math.random()*jokesArray.length)];
    document.getElementById("joke-para").textContent = randomJokes;
}

