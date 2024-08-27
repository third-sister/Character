// script.js
document.addEventListener('DOMContentLoaded', function() {
    const character = {
        name: "张无忌",
        age: 28,
        gender: "男",
        race: "汉",
        attributes: {
            strength: 16,
            dexterity: 14,
            constitution: 15,
            intelligence: 13,
            wisdom: 17,
            charisma: 14
        },
        skills: ["剑术", "内功", "轻功", "医术"],
        bio: "明教教主，拥有九阳神功和乾坤大挪移等绝学。"
    };

    document.querySelector('.name').textContent = character.name;
    document.querySelector('.age').textContent = character.age;
    document.querySelector('.gender').textContent = character.gender;
    document.querySelector('.race').textContent = character.race;

    Object.entries(character.attributes).forEach(([attr, value]) => {
        document.querySelector(`.${attr}`).textContent = value;
    });

    const skillsList = document.querySelector('.skills');
    character.skills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        skillsList.appendChild(li);
    });

    document.querySelector('.bio').textContent = character.bio;
});
