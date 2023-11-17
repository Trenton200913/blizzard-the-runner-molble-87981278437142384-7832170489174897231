scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level3`)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    game.gameOver(false)
})
let mySprite: Sprite = null
game.splash("Blizzard the runner Molble", "Press A to Run")
tiles.placeOnRandomTile(mySprite, assets.tile`myTile0`)
mySprite = sprites.create(assets.image`myImage`, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level`)
controller.moveSprite(mySprite, 0, 110)
forever(function () {
    info.changeScoreBy(1)
    mySprite.vy = 100
    mySprite.ax = 10
})
