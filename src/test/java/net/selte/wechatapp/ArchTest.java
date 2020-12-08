package net.selte.wechatapp;

import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.noClasses;

import com.tngtech.archunit.core.domain.JavaClasses;
import com.tngtech.archunit.core.importer.ClassFileImporter;
import com.tngtech.archunit.core.importer.ImportOption;
import org.junit.jupiter.api.Test;

class ArchTest {

    @Test
    void servicesAndRepositoriesShouldNotDependOnWebLayer() {
        JavaClasses importedClasses = new ClassFileImporter()
            .withImportOption(ImportOption.Predefined.DO_NOT_INCLUDE_TESTS)
            .importPackages("net.selte.wechatapp");

        noClasses()
            .that()
            .resideInAnyPackage("net.selte.wechatapp.service..")
            .or()
            .resideInAnyPackage("net.selte.wechatapp.repository..")
            .should()
            .dependOnClassesThat()
            .resideInAnyPackage("..net.selte.wechatapp.web..")
            .because("Services and repositories should not depend on web layer")
            .check(importedClasses);
    }
}
