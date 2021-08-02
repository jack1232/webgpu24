import { CreateShapeWithLight } from './surface';
import { LightInputs } from './shaders';
import { TorusData } from './vertex_data';
import $ from 'jquery';

const CreateShape = async (li:LightInputs, rlarge = 1.5, rsmall = 0.4, nlarge = 100, nsmall = 50, isAnimation = true) => {
    const data =TorusData(rlarge, rsmall, nlarge, nsmall);
    await CreateShapeWithLight(data?.vertexData!, data?.normalData!, li, isAnimation);
}

let rlarge = 1.5;
let rsmall = 0.4;
let nlarge = 100;
let nsmall = 50;
let li:LightInputs = {};
let isAnimation = true;

CreateShape(li, rlarge, rsmall, nlarge, nsmall, isAnimation);

$('#id-radio input:radio').on('click', function(){
    let val = $('input[name="options"]:checked').val();
    if(val === 'animation') isAnimation = true;
    else isAnimation = false;
    CreateShape(li, rlarge, rsmall, nlarge, nsmall, isAnimation);
});

$('#btn-redraw').on('click', function(){
    li.color = $('#id-color').val()?.toString();
    li.isPhong = $('#id-isphong').val()?.toString();
    li.ambientIntensity = $('#id-ambient').val()?.toString();
    li.diffuseIntensity = $('#id-diffuse').val()?.toString();
    li.specularIntensity= $('#id-specular').val()?.toString();
    li.shininess= $('#id-shininess').val()?.toString();
    li.specularColor = $('#id-scolor').val()?.toString();
    rlarge = parseFloat($('#id-rlarge').val()?.toString()!);
    rsmall = parseFloat($('#id-rsmall').val()?.toString()!);
    nlarge = parseInt($('#id-nlarge').val()?.toString()!);
    nsmall = parseInt($('#id-nsmall').val()?.toString()!);
    CreateShape(li, rlarge, rsmall, nlarge, nsmall, isAnimation);
});