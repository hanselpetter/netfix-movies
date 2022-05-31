<template>
  <div class="footers">
    <hr />
    <div class="footers-foot">
      <small class="footers-foo"
        >Copyright © 2022 NetFlix Privacy & Legal AdChoices
      </small>
      <small class="footers-foo two">
        Accessibility Language: English (US)</small
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.footers {
  display: flex;
  flex-direction: column;
  font-size: 1.19em;
}

.footers-foo {
  list-style: 26px;
}

.footers-foot {
  padding: 2% 0 4% 4%;
}

.two {
  margin-top: 2%;
}

@media only screen and (min-width: 992px) {
  .footers {
    flex-direction: column;
    padding: 0;
  }

  .footers-foot {
    padding: 0;
  }

  .footers-foo {
    margin: 0 2% 0 1%;
    font-size: 15px;
    letter-spacing: 0.7px;
  }

  .two {
    margin: 0;
  }
}
</style>
