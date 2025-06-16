# ---------- BYG  ----------
FROM maven:3.9.7-eclipse-temurin-21 AS build
WORKDIR /workspace
COPY pom.xml .
COPY src ./src
# bygger + repackager Spring-Boot-jar (uden tests)
RUN mvn -B clean package -DskipTests spring-boot:repackage

# ---------- RUNTIME ----------
FROM eclipse-temurin:21-jre
WORKDIR /app
# kopiér den færdige jar og giv den det navn entry-pointet bruger
COPY --from=build /workspace/target/*-SNAPSHOT.jar /app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app.jar"]
