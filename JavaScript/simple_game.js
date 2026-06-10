// не мой код, разбирал его

class Character {
    constructor(name, health, attack) {
        this.name = name;
        this.health = health;
        this.attack = attack;
    }

    takeDamage(amount) {
        this.health -= amount;

        if (this.health < 0) {
            this.health = 0;
        }
    }

    isAlive() {
        return this.health > 0;
    }

    display() {
        console.log(
            `${this.name}: ${this.health} HP`
        );
    }
}

class Battle {
    constructor(player, enemy) {
        this.player = player;
        this.enemy = enemy;
    }

    fight() {
        while (
            this.player.isAlive() &&
            this.enemy.isAlive()
        ) {
            this.enemy.takeDamage(
                this.player.attack
            );

            if (!this.enemy.isAlive()) {
                break;
            }

            this.player.takeDamage(
                this.enemy.attack
            );
        }

        if (this.player.isAlive()) {
            console.log(
                `${this.player.name} wins!`
            );
        } else {
            console.log(
                `${this.enemy.name} wins!`
            );
        }
    }
}

const hero = new Character(
    "Knight",
    30,
    8
);

const monster = new Character(
    "Dragon",
    40,
    6
);

const battle = new Battle(
    hero,
    monster
);

battle.fight();

hero.display();
monster.display();