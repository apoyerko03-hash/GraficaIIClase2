import { Component , signal , computed} from '@angular/core';

@Component({
  selector: 'app-editor-filtro',
  standalone: true,
  templateUrl: './editor-filtro.html',
  styleUrl: './editor-filtro.scss',
})
export class EditorFiltroComponent {
brillo= signal(100);
contraste = signal(100);
blur = signal(0);   //pixeles
retro = signal(false);

filtroScss = computed(()=>{
  const filtros = `brightness(${this.brillo()}%) contrast(${this.contraste()}%) blur(${this.blur()}px)`;
  return this.retro() ? `${filtros} grayscale(100%) sepia(30%)` : filtros;
})

actualizar  (prop: string, evento: Event){
const valor = (evento.target as HTMLInputElement).value; //recicir una propiedad y un evento
if (prop == 'brillo') this.brillo.set(+valor);
if (prop == 'contraste') this.contraste.set(+valor);
if (prop == 'blur') this.blur.set(+valor); //valores obtenidos incrementando
}
cambiarRetro(){
this.retro.set(!this.retro());
}
}

