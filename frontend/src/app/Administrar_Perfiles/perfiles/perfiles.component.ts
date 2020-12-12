import { query } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Departamento } from 'src/app/models/departamento.model';
import { User } from 'src/app/models/user.model';
import { DepartamentoService } from 'src/app/services/departamento/departamento.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-perfiles',
  templateUrl: './perfiles.component.html',
  styleUrls: ['./perfiles.component.scss']
})
export class PerfilesComponent implements OnInit {

  filtro;
  rol = [
    { desc: 'ADMIN' },
    { desc: 'ADSYS' },
    { desc: 'PORTERIA' },
    { desc: 'RESIDENTE' },
  ]
  departamentos: Departamento[];
  usuarios: User[];
  usuarioSeleccionado: User;
  usuarioSeleccionadoDet: User;
  formUsuario: FormGroup;
  formUsuarioAct: FormGroup;

  @ViewChild('content') modal;
  @ViewChild('contentActualizar') modalAct;
  @ViewChild('contentDetalle') modalDet;

  cboDepartamentos = new FormControl();
  cboDepartamentosAct = new FormControl();

  constructor(
    private userService: UsuarioService,
    private depService: DepartamentoService,
    private fb: FormBuilder,
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
    this.userService.listar().subscribe(data => {
      this.usuarios = data.data;
    })

    this.depService.listar().subscribe(data => {
      this.departamentos = data.data;
    })

    this.formUsuario = this.fb.group({
      txtNombre: [''],
      txtUserName: [''],
      txtDNI: [''],
      txtCelular: [''],
      txtApellidoPat: [''],
      txtApellidoMat: [''],
      txtPassword: [''],
      cboROL: [''],
    })

    this.formUsuarioAct = this.fb.group({
      txtUserName: [''],
      txtNombre: [''],
      txtApellidoPat: [''],
      txtApellidoMat: [''],
      txtCelular: [''],
    })
  }

  abrirModal() {
    this.modalService.open(this.modal);
  }

  abrirModalAct(row: User) {
    this.modalService.open(this.modalAct);
    this.usuarioSeleccionado = row;

    this.formUsuarioAct.controls.txtNombre.setValue(row.nombre);
    this.formUsuarioAct.controls.txtApellidoPat.setValue(row.apellidoPaterno);
    this.formUsuarioAct.controls.txtApellidoMat.setValue(row.apellidoMaterno);
    this.formUsuarioAct.controls.txtUserName.setValue(row.username);
    this.formUsuarioAct.controls.txtCelular.setValue(row.celular);

    if (row.rol == 'RESIDENTE') {
      this.cboDepartamentosAct.setValue(row.departamento._id)
    }
  }

  abrirModalDet(det: User) {
    this.modalService.open(this.modalDet);
    this.usuarioSeleccionadoDet = det;
  }

  limpiarModal() {
    this.formUsuario.controls.txtNombre.setValue('');
    this.formUsuario.controls.txtUserName.setValue('');
    this.formUsuario.controls.txtCelular.setValue('');
    this.formUsuario.controls.cboROL.setValue('');
    this.formUsuario.controls.txtDNI.setValue('');

    this.formUsuario.controls.txtApellidoPat.setValue('');
    this.formUsuario.controls.txtApellidoMat.setValue('');
    this.formUsuario.controls.txtPassword.setValue('');
  }

  agregarUsuario() {
    var datosForm = this.formUsuario.value;
    if (datosForm.txtNombre == '' || datosForm.txtNombre == null) {
      swal('Error', 'Inserte nombre', 'warning')
      return;
    }

    if (datosForm.txtApellidoPat == '' || datosForm.txtApellidoPat == null) {
      swal('Error', 'Inserte apellido materno', 'warning')
      return;
    }

    if (datosForm.txtApellidoPat == '' || datosForm.txtApellidoPat == null) {
      swal('Error', 'Inserte apellido paterno', 'warning')
      return;
    }

    if (datosForm.txtUserName == '' || datosForm.txtUserName == null) {
      swal('Error', 'Inserte nombre de usuario', 'warning')
      return;
    }

    if (datosForm.txtPassword == '' || datosForm.txtPassword == null) {
      swal('Error', 'Inserte contraseña', 'warning')
      return;
    }

    if (datosForm.txtCelular == '' || datosForm.txtCelular == null) {
      swal('Error', 'Inserte celular', 'warning')
      return;
    }

    if (datosForm.txtDNI == '' || datosForm.txtDNI == null) {
      swal('Error', 'Inserte DNI', 'warning')
      return;
    }

    if (datosForm.cboROL == '' || datosForm.cboROL == null) {
      swal('Error', 'Escoja rol', 'warning')
      return;
    }


    var query = {
      rol: datosForm.cboROL,
      nombre: datosForm.txtNombre,
      apellidoPaterno: datosForm.txtApellidoPat,
      apellidoMaterno: datosForm.txtApellidoMat,
      username: datosForm.txtUserName,
      password: datosForm.txtPassword,
      celular: datosForm.txtCelular,
      dni: datosForm.txtDNI,
      departamento: null
    }

    if (datosForm.cboROL == 'RESIDENTE') {
      if (this.cboDepartamentos.value == '' || this.cboDepartamentos.value == null) {
        swal('Error', 'Inserte departamento', 'warning')
        return;
      }
      query.departamento = this.cboDepartamentos.value
    }

    this.userService.registrar(query).subscribe(data => {
      swal('Correcto', 'Se inserto de manera correcta', 'success')
      this.userService.listar().subscribe(data => {
        this.usuarios = data.data;
      })
    })
  }

  actualizarUsuario() {
    var datosForm = this.formUsuarioAct.value;
    var id = this.usuarioSeleccionado._id;

    if (datosForm.txtNombre == '' || datosForm.txtNombre == null) {
      swal('Error', 'Inserte nombre', 'warning')
      return;
    }

    if (datosForm.txtApellidoPat == '' || datosForm.txtApellidoPat == null) {
      swal('Error', 'Inserte apellido materno', 'warning')
      return;
    }

    if (datosForm.txtApellidoPat == '' || datosForm.txtApellidoPat == null) {
      swal('Error', 'Inserte apellido paterno', 'warning')
      return;
    }

    if (datosForm.txtUserName == '' || datosForm.txtUserName == null) {
      swal('Error', 'Inserte nombre de usuario', 'warning')
      return;
    }

    if (datosForm.txtCelular == '' || datosForm.txtCelular == null) {
      swal('Error', 'Inserte celular', 'warning')
      return;
    }

    var query: any = {
      id: id,
      usuario: {
        nombre: datosForm.txtNombre,
        apellidoPaterno: datosForm.txtApellidoPat,
        apellidoMaterno: datosForm.txtApellidoMat,
        celular: datosForm.txtCelular,
        username: datosForm.txtUserName,

      }
    }

    if (this.usuarioSeleccionado.rol == 'RESIDENTE') {
      if (this.cboDepartamentosAct.value == '' || this.cboDepartamentosAct.value == null) {
        swal('Error', 'Inserte departamento', 'warning')
        return;
      }
      query.usuario.departamento = this.cboDepartamentosAct.value
    }

    this.userService.actualizar(query).subscribe(data => {
      swal('Correcto', 'Se actualizo de manera correcta', 'success')
      this.userService.listar().subscribe(data => {
        this.usuarios = data.data;
      })
    })
  }

}