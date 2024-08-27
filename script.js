// script.js
document.addEventListener('DOMContentLoaded', function() {
    const character = {
        name: "张无忌",
        age: 28,
        gender: "男",
        race: "汉",
        skills: [
            { name: "九阳神功", level: "S" },
            { name: "乾坤大挪移", level: "A+" },
            { name: "太极拳", level: "A" },
            { name: "轻功", level: "B+" }
        ]
    };

    // 填充静态数据
    document.querySelector('.name').textContent = character.name;
    document.querySelector('.age').textContent = character.age;
    document.querySelector('.gender').textContent = character.gender;
    document.querySelector('.race').textContent = character.race;

    // 添加技能及其等级
    const skillsList = document.querySelector('.skills');
    character.skills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = `${skill.name} (${skill.level})`;
        skillsList.appendChild(li);
    });
});
