<template>
<div class="container" id = "12">
  <div class="cube" id = "1">
    <div :class="`side ${question.class}`" id = "Side" v-for="(question,key) in data" :key="key">
      <div class="text">{{questionName.question}}</div>
      <b>{{questionName.first_a}}</b><input type="radio" name="try" id="1" @click = "click(1)"><br>
      <b>{{questionName.sec_a}}</b><input type="radio" name="try" id="2" @click = "click(2)"><br>
      <b>{{questionName.third_a}}</b><input type="radio" name="try" id="3" @click = "click(3)"><br>
      <b>{{questionName.forth_a}}</b><input type="radio" name="try" id="4" @click = "click(4)"><br>
      <button @click = "answerV(`${questionName.answer}`)" :id="`${key}`">Ответить</button>
    </div>
  </div>
  </div>
</template>

<script>
var json = require('.././answers.json');
export default {
  name:"A",
  data: function () {
    return {
      data: null,
      answer: 0,
      questionName: null
    }
  },
  methods: {
    click (a) {
      this.answer = a;
    },
    changeQuestion (a) {
      this.data = json.answers
      var random = Math.floor(Math.random() * Math.floor(5) + 1)
      console.log(a)
      console.log(random)
      if (a == random) {
        this.changeQuestion(a)
      } else if (random == 1) {
        this.questionName = json.answers.question1
      } else if (random == 2){
        this.questionName = json.answers.question2
      } else if (random == 3){
        this.questionName = json.answers.question3
      } else if (random == 4){
        this.questionName = json.answers.question4
      } else if (random == 5){
        this.questionName = json.answers.question5
      } else if (random == 6){
        this.questionName = json.answers.question6
      }
      console.log(this.questionName);
    },
    answerV (ans) { 

      var box = document.querySelector('.container')
      if (this.answer == ans) {
      var a = document.getElementById('1')
      if (a.style.animationName == "bounce") {
        a.style.animationName = "bounce1"
      } else {
        a.style.animationName = "bounce"
      }
      document.querySelectorAll('.side')
      document.querySelectorAll('.side').forEach(element => {
      element.style.backgroundColor = "#5cb579"
      });
      this.$emit('str', 1)
      var self = this;

      setTimeout(function() {
        self.changeQuestion(self.questionName.number)
      }, 1500);

    } else {
      document.querySelectorAll('.side')
      document.querySelectorAll('.side').forEach(element => {
        element.style.backgroundColor = "#c17772"
      });
      box.style.transform = 'translateX(' + -200 + 'px)';
      setTimeout(() => {
      box.style.transform = 'translateX(' + 200 + 'px)';
      },400);
      setTimeout(() => {
      box.style.transform = 'translateX(' + 0 + 'px)';
      },800);
      this.$emit('str', 0)
      self = this;

      setTimeout(function() {
        self.changeQuestion(self.questionName.number)
      }, 1300);

    }
    }
  },
  beforeMount() {

    var rotateY = 0;
    var rotateX = 0;
    document.onkeydown = function (e) {
      if (e.keyCode === 37) {
        rotateY -= 90
        rotateX = 0
      }
      else if (e.keyCode === 38) {
        rotateX += 90
        rotateY = 0
      } 
      else if (e.keyCode === 39) {
        rotateY += 90
        rotateX = 0
      }
      else if (e.keyCode === 40) {
        rotateX -= 90
        rotateY = 0
      }
      if (rotateY != 0 && rotateY%180 == 0) {
        rotateX += 180
        rotateY += 180
      }

  document.querySelector('.cube').style.transform = 
      'rotateY(' + rotateY + 'deg)'+
      'rotateX(' + rotateX + 'deg)';
    }
  },
  mounted () {
    this.data = json.answers
    this.questionName = json.answers.question1
    console.log(this.questionName);
    
    document.querySelector('.cube').style.transform = 
      'rotateY(' + 0 + 'deg)'+
      'rotateX(' + -20 + 'deg)';
  }
}
</script>

<style>
* {
 box-sizing: border-box;
}
body {
  overflow: hidden;
}
button{
  font-size: 10px;
}
.container {
 margin: 100px auto;
 width: 300px;
 height: 300px;
 perspective: 700px;
 bottom:2px;
  transition: 0.5s ease-out ;
  z-index: 5;
  position: absolute;
  left: 40vw;
  top: 30vh;
}
b{
  font-size: 20px
}
.cube {
 width: inherit;
 height: inherit;
 transform-style: preserve-3d;
 top: 1;
 transition: 1s ease-out;

  animation-duration: 0.375s;
  animation-direction: alternate;
  animation-timing-function: cubic-bezier(0.6, 0.08, 0.8, 0.6);
  animation-iteration-count: 4;
}
.side {
 position: absolute;
 width: inherit;
 height: inherit;
 border: 2px solid #333333;
 background-color: rgb(152, 152, 250);
 font: normal 40px Arial;
 text-align: center;
 color: black;
}

.front {
 transform: translateZ(150px);
}

.back {
 transform: rotateX(180deg) translateZ(150px);
}
.right {
 transform: rotateY(90deg) translateZ(150px);
}

.left {
 transform: rotateY(-90deg) translateZ(150px);
}

.top {
 transform: rotateX(90deg) translateZ(150px);
}

.bottom {
 transform: rotateX(-90deg) translateZ(150px);
}
@keyframes bounce {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(0, 160px, 0);
  }
}
@keyframes bounce1 {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(0, 160px, 0);
  }
}
</style>