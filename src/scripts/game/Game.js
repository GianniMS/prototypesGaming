import {App} from "../system/App";
import {Scene} from "../system/Scene";
import {Background} from "./Background";

export class game extends scene {
    create() {
        this.createBackground();
    }

    createBackground() {
        this.bg = new Background();
        this.container.addChild(this.bg.container);
    }

    update(dt) {
        this.bg.update(dt);
    }
}

