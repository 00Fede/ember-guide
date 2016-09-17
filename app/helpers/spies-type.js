import Ember from 'ember';

const spyType = [
'Espía'
];
export function spiesType([type]/*, hash*/) {
if (spyType.contains(type)) {
return 'Conoce la verdad';
}
return 'Liberate de tus enemigos';
}


export default Ember.Helper.helper(spiesType);
