class TitleScene extends Phaser.Scene {
    constructor() {
        super({ key: 'TitleScene' });
    }
    preload(){
        this.load.image('title', 'assets/phaserlogo.png');
    }
    create() {
        // Display title text and instructions
        this.add.image(400, 300, 'title');

        const titleText = this.add.text(400, 200, 'PHASER MAN GAME', {
            fontSize: '48px',
            fill: '#000',
            strokeThickness: 10
        });
        titleText.setOrigin(0.5);

        const instructionsText = this.add.text(400, 300, 'Press SPACE to Start', {
            fontSize: '24px',
            fill: '#000',
            strokeThickness: 10
        });
        instructionsText.setOrigin(0.5);

        // Set up keyboard input to start the game
        this.input.keyboard.on('keydown-SPACE', this.startGame, this);
    }

    startGame() {
        // Transition to the gameplay scene when the spacebar is pressed
        this.scene.start('BootGameScene');
    }
}