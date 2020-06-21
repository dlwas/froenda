<template>
    <div class="contact">
        <SectionName name="contact" />
        <form class="contact__form">
            <div class="form__item column">
                <label class="form__name">Name</label>
                <input class="form__input" type="text" name="name" autocomplete="on" required />
                <p class="form__error">Require name</p>
            </div>
            <div class="form__item column">
                <label class="form__name">Email</label>
                <input class="form__input" type="email" name="email" autocomplete="on" required />
                <p class="form__error">Require email</p>
            </div>
            <div class="form__item column">
                <label class="form__name">Subject</label>
                <input class="form__input" type="text" name="subject" autocomplete="on" required />
                <p class="form__error">Require subject</p>
            </div>
            <div class="form__item column">
                <label class="form__name">Message</label>
                <textarea class="form__input" type="text" name="message" rows="4" autocomplete="on" required />
                <p class="form__error">Require message</p>
            </div>
            <button class="form__button" v-on:click="this.send">
                {{$t(`utilities.sendmessage`)}}
            </button>
        </form>
    </div>
</template>

<script>
import SectionName from "@/components/SectionName.vue";

export default {
  name: "Contact",
  components: {
    SectionName
  },
  methods: {
    send() {
      console.log("send btn message");
    }
  }
};
</script>

<style lang="scss" scoped>
.contact {
    color: $text__secondary;
    margin-top: 5rem;
    margin-bottom: 2rem;

    &__form {
        @include setContainer;
        @include setFlexCenter;
        margin-top: 5rem;
        flex-direction: column;
    }
}

.form {
    &__item {
        display: flex;
        flex-direction: column;
        margin-bottom: 1rem;
        width: 50vw;

        @media #{$mobile},
        #{$mobile-tablet},
        #{$tablet-laptop} {
            width: 100%;
        }
    }

    &__name {
        padding: 1rem 0rem;
        font-family: $font__monda;
        font-weight: $font__weight__700;
    }

    &__input {
        border: none;
        outline: none;
        border: 1px solid $text__secondary;
        border-radius: 0;
        padding: 1rem;
    }

    &__error {
        padding: 0.5rem 0rem;
        color: $color__danger;
        font-size: 0.75rem;
        font-family: $font__monda;
        font-weight: $font__weight__400;
        
        // opacity: 0;
    }

    &__button {
        @include setFlexCenter;
        // border: none;
        outline: none;
        margin-top: 5rem;
        margin-bottom: 5rem;
        padding: .75rem 2.25rem;
        font-family: $font__monda;
        border: 1px solid $text__secondary;
        cursor: pointer;

        color: $text__secondary;
        background-color: white;

        &:hover {
            color: $text__primary;
            background-color: $bg__secondary;
        }
    }
}
</style>