# 🔀 Guía completa de Pull Requests (PR)

## 1. ¿Qué es un Pull Request?

Un **Pull Request (PR)** es una solicitud para **integrar cambios** desde una rama hacia otra dentro de un repositorio Git.
Es el mecanismo principal para:
- Revisar código
- Validar calidad
- Discutir mejoras
- Mantener estabilidad del proyecto

👉 No es solo un botón de *merge*, es un **proceso de control de calidad**.

---

## 2. ¿Para qué sirven los Pull Requests?

Los PR permiten:

- ✅ Revisión de código entre compañeros
- ✅ Detección temprana de errores
- ✅ Validación de reglas de negocio
- ✅ Asegurar estándares de código
- ✅ Integración segura a ramas críticas (`develop`, `main`)
- ✅ Trazabilidad del trabajo realizado

En equipos profesionales, **ningún cambio llega a producción sin pasar por un PR**.

---

## 3. ¿Cuándo se debe crear un Pull Request?

Se crea un Pull Request cuando:

- Se termina una **feature**
- Se corrige un **bug**
- Se prepara un **release**
- Se aplica un **hotfix**
- Se actualiza documentación relevante

Ejemplos:
- `feature/login-form` → `develop`
- `release/1.2.0` → `main`
- `hotfix/fix-crash` → `main`

---

## 4. Flujo general de un Pull Request

```
1. Crear rama
2. Desarrollar cambios
3. Commit de cambios
4. Push a repositorio remoto
5. Crear Pull Request
6. Revisión de código
7. Correcciones (si aplica)
8. Aprobación
9. Merge
10. Eliminación de la rama
```

---

## 5. Paso a paso: cómo crear un Pull Request

### 5.1 Crear la rama

```bash
git checkout develop
git checkout -b feature/login-form
```

---

### 5.2 Desarrollar y hacer commits

```bash
git add .
git commit -m "feat: agregar formulario de login"
```

Buenas prácticas:
- Commits pequeños
- Mensajes claros
- Usar Conventional Commits

---

### 5.3 Subir la rama al repositorio remoto

```bash
git push origin feature/login-form
```

---

### 5.4 Crear el Pull Request (GitHub)

1. Ir al repositorio en GitHub
2. Aparecerá el botón **Compare & pull request**
3. Seleccionar:
   - Base: `develop`
   - Compare: `feature/login-form`
4. Agregar:
   - Título claro
   - Descripción detallada
5. Crear PR

---

## 6. Cómo escribir un buen Pull Request

### Título
Debe ser corto y descriptivo:

```text
feat: agregar formulario de login
fix: corregir validación de email
```

---

### Descripción (ejemplo)

```md
## ¿Qué se hizo?
- Se creó formulario de login
- Se agregó validación de campos
- Se integró servicio de autenticación

## ¿Por qué?
- Permite el acceso de usuarios registrados

## ¿Cómo probar?
1. Ir a /login
2. Ingresar credenciales válidas
3. Verificar redirección al dashboard
```

---

## 7. Revisión de código (Code Review)

### ¿Quién revisa?
- Compañeros del equipo
- Líder técnico
- Instructor (en entornos de formación)

### ¿Qué se revisa?
- Funcionalidad
- Legibilidad
- Buenas prácticas
- Arquitectura
- Tests
- Seguridad básica

👉 El objetivo **no es criticar**, es mejorar el código.

---

## 8. Estados de un Pull Request

- 🟡 **Open**: en revisión
- 🔴 **Changes requested**: requiere ajustes
- 🟢 **Approved**: listo para merge
- ⚫ **Closed**: cerrado sin merge
- 🟣 **Merged**: integrado correctamente

---

## 9. Merge del Pull Request

Tipos de merge más comunes:

### 🔹 Merge Commit
- Mantiene historial completo
- Ideal para `main`

### 🔹 Squash and Merge
- Une todos los commits en uno
- Ideal para `feature/*`

### 🔹 Rebase and Merge
- Historial limpio y lineal
- Requiere mayor experiencia

👉 Recomendación:
- `feature/*` → Squash
- `release/*` y `hotfix/*` → Merge commit

---

## 10. Checklist antes de aprobar un PR

- [ ] Compila correctamente
- [ ] Pasa pruebas
- [ ] No rompe funcionalidad existente
- [ ] Sigue estándares de código
- [ ] Documentación actualizada (si aplica)

---

## 11. Errores comunes en Pull Requests

- PR demasiado grande
- Sin descripción
- Mezclar múltiples cambios
- No responder comentarios
- Merge sin aprobación

---

## 12. Buenas prácticas clave

- PR pequeños y frecuentes
- Responder comentarios con respeto
- Actualizar la rama si hay conflictos
- Cerrar PRs obsoletos
- Eliminar la rama después del merge

---

## 13. Pull Requests en equipos de formación

Recomendado:
- PR obligatorio para toda entrega
- Ramas protegidas (`main`, `develop`)
- Revisión mínima de 1 persona
- Checklist obligatorio

---

## 14. Conclusión

Los Pull Requests son una de las prácticas más importantes en el desarrollo profesional.
Bien usados, mejoran la calidad del código, el trabajo en equipo y la estabilidad del proyecto.

👉 Un buen PR = buen equipo 🚀
