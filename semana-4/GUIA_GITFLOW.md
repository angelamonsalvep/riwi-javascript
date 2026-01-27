# 🧭 Guía práctica para implementar Gitflow

## 1. ¿Qué es Gitflow y por qué usarlo?

**Gitflow** es un modelo de ramificación para Git que define reglas claras sobre:
- Cómo crear ramas
- Para qué sirve cada rama
- Cuándo y cómo integrar cambios

### Beneficios
- Orden en equipos medianos y grandes  
- Menos errores en producción  
- Flujo claro entre desarrollo, pruebas y releases  
- Ideal para trabajo colaborativo, Pull Requests y CI/CD  

---

## 2. Ramas principales

### `main`
- Contiene el código en **producción**
- Cada commit representa una versión estable
- Se etiqueta con versiones (`v1.0.0`)

> ❌ Nunca se trabaja directamente en `main`

---

### `develop`
- Rama de integración
- Contiene funcionalidades listas para pruebas
- Base para todas las nuevas features

---

## 3. Ramas de soporte

### `feature/*`
Se usan para desarrollar nuevas funcionalidades.

- Se crean desde: `develop`
- Se integran en: `develop`

```bash
git checkout develop
git checkout -b feature/login-form
```

---

### `release/*`
Se usan para preparar una versión antes de producción.

- Se crean desde: `develop`
- Se integran en: `main` y `develop`

```bash
git checkout develop
git checkout -b release/1.2.0
```

---

### `hotfix/*`
Se usan para corregir errores críticos en producción.

- Se crean desde: `main`
- Se integran en: `main` y `develop`

```bash
git checkout main
git checkout -b hotfix/fix-login-crash
```

---

## 4. Flujo completo

```
develop → feature/* → develop
develop → release/* → main → develop
main → hotfix/* → main → develop
```

---

## 5. Pull Requests

- No hacer push directo a `main` ni `develop`
- Revisión de código obligatoria
- Tests deben pasar

---

## 6. Convención de commits

```text
feat: nueva funcionalidad
fix: corrección de bug
docs: documentación
```

---

## 7. Versionado semántico

```text
MAJOR.MINOR.PATCH
```

```bash
git tag v1.2.0
git push origin v1.2.0
```

---

## 8. Recomendaciones para equipos

- `main` protegida
- `develop` como rama base
- `feature/*` para trabajo individual
- Pull Request obligatorio

---

## 9. Errores comunes

- Trabajar en `main`
- Features muy grandes
- No cerrar ramas
- No usar PR

---

## 10. Resumen

| Rama | Uso |
|---|---|
| main | Producción |
| develop | Integración |
| feature/* | Funcionalidades |
| release/* | Versiones |
| hotfix/* | Bugs críticos |
