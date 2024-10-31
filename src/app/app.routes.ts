import { Routes } from '@angular/router';
import { BaseAdminComponent } from './presentation/pages/base-admin/base-admin.component';
import { DashboardComponent } from './presentation/pages/dashboard/dashboard.component';
import { StudentsComponent } from './presentation/pages/students/students.component';
import { TeachersComponent } from './presentation/pages/teachers/teachers.component';
import { UtilisateurComponent } from './presentation/pages/utilisateur/utilisateur.component';
import { AbsencesComponent } from './presentation/pages/absences/absences.component';
import { RapportsComponent } from './presentation/pages/rapports/rapports.component';
import { SettingsComponent } from './presentation/pages/settings/settings.component';
import { SchoolComponent } from './presentation/pages/school/school.component';
import { SmtpComponent } from './presentation/pages/smtp/smtp.component';
import { CarteStudentsComponent } from './presentation/pages/carte-students/carte-students.component';
import { FormStudentComponent } from './presentation/components/shared/form-student/form-student.component';
import { LoginComponent } from './presentation/pages/login/login.component';
import { FormTeacherComponent } from './presentation/components/shared/form-teacher/form-teacher.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    component: BaseAdminComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'students', component: StudentsComponent },
      { path: 'teachers', component: TeachersComponent },
      { path: 'users', component: UtilisateurComponent },
      { path: 'absences', component: AbsencesComponent },
      { path: 'rapports', component: RapportsComponent },
      { path: 'cartestudents', component: CarteStudentsComponent },
      { path: 'form-students', component: FormStudentComponent },
      {path: 'form-teachers' , component: FormTeacherComponent},
      {
        path: 'settings',
        component: SettingsComponent,
        children: [
          { path: 'school', component: SchoolComponent },
          { path: 'smtp', component: SmtpComponent },
        ],
      },
    ],
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];
