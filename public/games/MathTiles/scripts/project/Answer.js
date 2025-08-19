export default class Answer extends ISpriteInstance {

    constructor() {
        super();
        const text = this.runtime.objects.AnswerText.createInstance(this.layer.index, this.x, this.y + 5);
        this.addDefaultChild(text);
        this.text = text;
        this.value = 0;
        this.clicked = null;

        this.setValue(0);
    }

    addDefaultChild(child) {
        this.addChild(child, {
            transformX: true,
            transformY: true,
            transformAngle: true,
            transformZElevation: true,
            transformWidth: true,
            transformHeight: true,
            destroyWithParent: true
        });
    }


    onClick() {
        if (this.clicked) this.clicked(this);
    }


    setValue(value) {
        this.value = value;
        this.text.text = this.value + "";
    }

}