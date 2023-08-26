class BootGameScene extends Phaser.Scene {
    constructor(){
        super({ key: 'BootGameScene' });
    }
    create() {
        // Display loading text
        const loadingText = this.add.text(400, 300, 'Loading...', {
            fontSize: '32px',
            fill: '#fff'
        });
        loadingText.setOrigin(0.5);

        // Load assets needed for the game and transition to the gameplay scene
        this.loadAssetsAndStartGame();
    }
    loadAssetsAndStartGame() {
        // Load all the assets needed for your game here
        // For example:
        this.load.image('sky', 'assets/sky.png');
        this.load.image('ground', 'assets/platform.png');
        this.load.image('star', 'assets/star.png');
        this.load.image('bomb', 'assets/bomb.png');
        this.load.spritesheet('dude', 'assets/dude.png', {
            frameWidth: 32,
            frameHeight: 48
        });

        // Start the asset loading process
        this.load.start();

        // Set up a callback for when all assets are loaded
        this.load.on('complete', () => {
            // Assets are loaded, start the gameplay scene
            setTimeout(() => {
                this.scene.start('GameplayScene');
            }, 5000);
        });
    }
}