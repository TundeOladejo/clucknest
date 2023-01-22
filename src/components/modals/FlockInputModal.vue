<template>
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">New Flock Record</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form action="" method="post">
                        <div class="mb-2">
                            <div class="form-group contact-form">
                                <div class="row">
                                    <div class="col-md-6 form-input__wrapper">
                                        <input type="text" id="flock" class="form-control" placeholder="Flock Name"
                                            v-model="flock" />
                                    </div>
                                    <div class="col-md-6 form-input__wrapper">
                                        <input type="date" id="date" class="form-control" placeholder="Date Acquired"
                                            v-model="date" />
                                    </div>
                                    <div class="col-md-6 form-input__wrapper">
                                        <select v-model="bird" class="form-select form-select-md"
                                            aria-label="Default select example">
                                            <option value="00" selected disabled>Select Bird Type</option>
                                            <option v-for="(birdType, index) in birdTypes" :key="index"
                                                v-bind:value="index">
                                                {{ birdType.name }}
                                            </option>
                                        </select>
                                    </div>
                                    <div class="col-md-6 form-input__wrapper">
                                        <select v-model="breed" class="form-select form-select-md"
                                            aria-label="Default select example">
                                            <option value="00" selected disabled>Select Breed</option>
                                            <option v-for="(flockBreed, index) in flockBreeds" :key="index"
                                                v-bind:value="index">
                                                {{ flockBreed.name }}
                                            </option>
                                        </select>
                                    </div>
                                    <div class="col-md-12 form-input__wrapper">
                                        <input type="text" id="source" class="form-control" placeholder="Flock Source"
                                            v-model="flockSource" />
                                    </div>
                                    <div class="col-md-12 form-input__wrapper">
                                        <input type="textarea" id="description" class="form-control"
                                            placeholder="Description" v-model="flockSource" />
                                    </div>
                                </div>

                                <!-- Flock Birds -->
                                <div class="row">
                                    <h3>Flock Birds</h3>
                                </div>

                                <div class="row">
                                    <div class="col-md-6 form-input__wrapper">
                                        <select v-model="acquisition" class="form-select form-select-md"
                                            aria-label="Default select example">
                                            <option value="00" selected disabled>Detail Type</option>
                                            <option v-for="(detailType, index) in detailTypes" :key="index"
                                                v-bind:value="index">
                                                {{ detailType.name }}
                                            </option>
                                        </select>
                                    </div>
                                    <div class="col-md-6 form-input__wrapper">
                                        <input type="number" id="chicks" class="form-control" placeholder="Chicks"
                                            v-model="chicks" />
                                    </div>
                                    <div class="col-md-6 form-input__wrapper">
                                        <input type="number" id="hens" class="form-control" placeholder="Hens"
                                            v-model="hens" />
                                    </div>
                                    <div class="col-md-6 form-input__wrapper">
                                        <input type="number" id="description" class="form-control" placeholder="Cocks"
                                            v-model="cocks" />
                                    </div>
                                </div>

                                <span class="fw-bold">Total Birds: 0</span>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                                Close
                            </button>
                            <button type="button" class="btn btn-primary" @click="saveExpense">
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "FlockInputModal",
    data() {
        return {
            bird: "00",
            breed: "00",
            acquisition: "00",
            birdTypes: [
                { name: "Layers" },
                { name: "Broilers" },
                { name: "Mixed" },
                { name: "Others" }
            ],
            flockBreeds: [
                { name: "Leghorn" },
                { name: "Rhode Island Red" },
                { name: "Kuroiler" },
                { name: "Kenbro" },
                { name: "Kienyegi" }
            ],
            flockBirds: [
                { chicks: 0, hens: 0, cocks: 0 }
            ],
            detailTypes: [
                { name: "Bought" },
                { name: "Hatched" },
                { name: "Gift In" },
                { name: "Donation In" }
            ]
        }
    }
};
</script>