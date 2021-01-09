类命名遵循首字母大写的驼峰命名法, 方法命名遵循首驼峰命名法

注释种类：单行// 多行/* */ 文档 /** */

基本类型：byte short int long | float double | char | boolean
占用字节： 1     2    4    8      4     8        1  (JVM作为4处理)
默认数值： 0     0    0   0L     0.0f  0.0d  '\u0000'  false

引用类型：除基本类型的其他类型。引用类型变量内部存储一个“地址”，指向某个对象在内存的位置

final修饰的变量是常量,命名通常全大写。不同于JS，Java可以先声明常量，再初始化；JS声明常量时必须初始化

[操作符优先级](https://introcs.cs.princeton.edu/java/11precedence/)

类型自动提升：参与运算的两个数类型不一致，那么计算结果为较大类型的整型
与强制转型：`short s = (short) i;`
浮点数常常无法精确表示，并且浮点数的运算结果可能有误差

转义字符：\" \' \\ \n \r \t \u####

创建数组：`new int[length]` `new int[] { 1, 2, 3 };` `int[] ns = { 1, 2, 3 };`
多维数组：`int[][] ns = {{}, {}}`

占位符：%d %x %e %f %s

分支语句：`if(){}else{}` `switch`
循环语句：`while(){}` `do{}while()` `for(;;){}` `for(:)`
循环关键词：`break continue`跳出当前循环，`OUT:for(){break OUT;}`跳出指定位置循环

类之于实例，相当于整型之于整数字面量
方法     可变参数`func(String... names)` 等价于 `func(String[] names)`
构造方法  默认构造方法，构造方法可以是多个；new一个实例时，先初始化字段，再调用构造方法
方法重载  重载overload，方法名相同参数不同
继承     关键字extends, Java只允许继承单个父类；子类访问父类合法字段可使用 super; final修饰的类不可被继承;instanceof
多态     继承与override产生多态，final修饰的变量仅可以被赋值一次

抽象类：abstract,方法抽象则多在的类一定钥匙抽象的
接口：没有字段而且所以方法都是抽象方法的抽象类可以定义为接口`interface IName{}` 接口定义的所有方法默认都是public abstract
     类与类之间用extends,类与接口之间用implements,类可以实现多个接口，接口可以定义default方法，实现类不必覆写该方法
静态字段：推荐用类名来访问静态字段，静态字段属于类

包：是一种命名空间，包名+类名可以解决类名冲突；在定义类的时候可以声明包名`package pname`
   包没有父子关系。java.util和java.util.zip是不同的包，两者没有任何继承关系。import导入其他包的类

修饰符：类字段默认是包作用域，public protected private packaged

内部类的三种形式
直接嵌套在类里，可以通过`Out.this`访问外部类；需要通过外部类的实例来new
匿名内部类 new 继承的类或者实现的接口() {}
直接嵌套在类中的静态类，可以访问外部类的静态字段，可以直接new

classpath可以通过命令指定，用来指示JVM如何查找class文件
jar包就是class文件的zip包

核心类：String StrinBuilder StringJoiner 
自动装箱 拆箱
Java bean仅仅定义字段与其读写方法的类
枚举类：enum Name {SUN, MON}
BigInteger BigDecimal Math Random SecureRandom

Error是无需捕获的严重错误，Exception是应该捕获的可处理的错误；
使用三方jar包的方法（命令行）：javac java 时候添加-cp参数

反射：通过实例拿到类型信息。拿到Class后可以通过各种方法获取类型信息
`Class cls = String.class;`
`String s = "Hello"; Class cls = s.getClass();`
`Class cls = Class.forName("java.lang.String");`
JVM 懒加载类

注解：有点像装饰器,定义注解语法：`public @interface Report {int type() default 0;}`
元注解：修饰注解的注解
@Target可以定义Annotation能够被应用于源码的哪些位置
@Retention定义了Annotation的生命周期

[动态代理的通俗解释](https://www.liaoxuefeng.com/wiki/1252599548343744/1264804593397984#0)

泛型：泛型之于整型，相当于整型之于整型字面量1，即泛型是对类型的抽象
泛型定义：类或者接口后添加 <K, V>;静态方法定义泛型，static 后面多一个<>

Java 泛型的实现       // TUDO
extends super通配符  // TUDO
泛型与反射            // TUDO

集合：
Collection Set   SortedSet     TreeSet
                 HashSet
                 LinkedHashSet
           List  ArryList     
                 Vector
                 LinkedList
           Queue LinkedList
                 PriorityQueue
Map   SortedMap      TreeMap
      HashTable 
      HashMap
      LinkedHashMap

1. [廖雪峰Java教程](https://www.liaoxuefeng.com/wiki/1252599548343744)
