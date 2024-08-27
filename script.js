// script.js
document.addEventListener('DOMContentLoaded', function() {
    const character = {
        name: "张无忌",
        age: 28,
        gender: "男",
        race: "汉",
        attributes: {
            strength: 16, // 力量
            dexterity: 14, // 敏捷
            constitution: 15, // 体质
            intelligence: 13, // 智力
            wisdom: 17, // 感知
            charisma: 14 // 魅力
        },
        skills: [
            { name: "剑术", level: "B" },
            { name: "内功", level: "A" },
            { name: "轻功", level: "C" },
            { name: "医术", level: "SSS" }
        ],
        bio: "明教教主，拥有九阳神功和乾坤大挪移等绝学。"
    };

    // 定义等级到字母的映射
    const attributeLevels = [ "F", "E", "D", "C", "B", "A", "S", "SSS" ];

    // 填充静态数据
    document.querySelector('.name').textContent = character.name;
    document.querySelector('.age').textContent = character.age;
    document.querySelector('.gender').textContent = character.gender;
    document.querySelector('.race').textContent = character.race;

    // 将数值转换为字母等级
    Object.entries(character.attributes).forEach(([attr, value]) => {
        const index = Math.min(value - 1, attributeLevels.length - 1);
        document.querySelector(`.${attr}`).textContent = attributeLevels[index];
    });

    // 添加技能及其等级
    const skillsList = document.querySelector('.skills');
    character.skills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = `${skill.name} (${skill.level})`;
        skillsList.appendChild(li);
    });

    // 填充角色介绍
    document.querySelector('.bio').textContent = character.bio;
});
