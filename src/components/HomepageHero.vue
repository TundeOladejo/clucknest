<template>
    <div class="hero py-5">
        <div class="container hero-box">
            <div class="row col-md-12">
                <div class="col-md-7 py-2">
                    <p class="py-3 heading-text">
                        A new systematic digital approach into poultry management system.
                    </p>
                    <router-link to="/register">
                        <button type="button" class="btn btn-outline-primary btn-submit">
                            Get Started
                        </button>
                    </router-link>
                </div>
                <div class="col-md-5">
                    <img src="../assets/illustrations/project_management.svg" class="img img-fluid"
                        alt="image of a server cluster" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomepageHero",
};
</script>

<style lang="scss" scoped>
.hero {
    height: 0 auto;
    background-color: #eff0f3;
    padding: 43px 15px;

    &-box {
        display: flex;
        align-items: left;
        justify-content: center;
        flex-direction: column;

        .heading-text {
            font-size: 56px;
            color: #0d0d0d;
            font-weight: bold;
        }
    }

    &-left {
        text-align: center;
    }

    .btn-submit {
        background-color: #ff8e3c;
        border-color: #ff8e3c;
        color: #0d0d0d;
        text-decoration: none;

        &:hover {
            background-color: #fffffe;
            color: #0d0d0d;
        }
    }
}
</style>
