import {AbstractControl} from '@angular/forms';

export function minusculaValidator(control: AbstractControl) {
    if (control.value.trim() && !/^[a-z0-9_\-]+$/.test(control.value)) {
        return {minuscula: true};
    }
    return null;
}
