<template>
    <bread-crumb title="Birds Record" />
    <div>
        <flock-input-modal></flock-input-modal>
    </div>
    <div class="row mt-3">
        <div class="col-md-4 mb-3">
            <div class="card p-1 shadow">
                <div class="card-header bg-white d-flex justify-content-between">
                    <div class="d-flex gap-2">
                        <span class="fw-bold">Flock</span>
                        <span>A</span>
                    </div>
                    <action-component></action-component>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col">
                            <span class="fw-bold">Date Acquired: </span><span>20/11/2022</span><br>
                            <span class="fw-bold">Breed: </span><span>Rhode Island Red</span><br>
                            <span class="fw-bold">Size: </span><span>570</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4 mb-3">
            <div class="card p-1 shadow">
                <div class="card-header bg-white d-flex justify-content-between">
                    <div class="d-flex gap-2">
                        <span class="fw-bold">Flock</span>
                        <span>B</span>
                    </div>
                    <action-component></action-component>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col">
                            <span class="fw-bold">Date Acquired: </span><span>20/11/2022</span><br>
                            <span class="fw-bold">Breed: </span><span>Leghorn</span><br>
                            <span class="fw-bold">Size: </span><span>680</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4 mb-3">
            <div class="card p-1 shadow">
                <div class="card-header bg-white d-flex justify-content-between">
                    <div class="d-flex gap-2">
                        <span class="fw-bold">Flock</span>
                        <span>C</span>
                    </div>
                    <action-component></action-component>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col">
                            <span class="fw-bold">Date Acquired: </span><span>20/11/2022</span><br>
                            <span class="fw-bold">Breed: </span><span>Kenbro</span><br>
                            <span class="fw-bold">Size: </span><span>230</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BreadCrumb from '../content/BreadCrumb.vue';
import FlockInputModal from '../modals/FlockInputModal.vue';
import ActionComponent from '../content/ActionComponent.vue';

export default {
    name: "BirdsRecord",
    components: { BreadCrumb, FlockInputModal, ActionComponent }
}
</script>