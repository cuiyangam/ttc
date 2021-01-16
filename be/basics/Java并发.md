# Java 并发

## 创建线程的方式
```java
// 创建线程的方法1
class PrimeThread extends Thread {
    long minPrime;
    PrimeThread(long minPrime) {
        this.minPrime = minPrime;
    }

    public void run() {
        // compute primes larger than minPrime
        // . . .
    }
}
PrimeThread p = new PrimeThread(143);
p.start();

// 创建线程的方法2
class PrimeRun implements Runnable {
    long minPrime;
    PrimeRun(long minPrime) {
        this.minPrime = minPrime;
    }

    public void run() {
        // compute primes larger than minPrime
        // . . .
    }
}
PrimeRun p = new PrimeRun(143);
new Thread(p).start();
```

## 线程优先级 高的不一定先执行，只是执行的机会多

## synchronized 保证了代码块在任意时刻最多只有一个线程能执行
```java
synchronized(Counter.lock) { // 获取锁钥匙
    ...
} // 释放锁钥匙
```
线程同步规则：
0.一把锁子只有一把钥匙，从而只能锁住一扇门
1.synchronized() {} 给代码块加了一把插着钥匙的锁
2.首先执行到 synchronized 代码块的线程A，打开锁，自己进门，拔钥匙，关门，执行代码块
3.A 执行完以后，开门，出来，钥匙插在开着的锁子上
4.第二个线程，重复1，2，3
```java
// 死锁原理
public void add(int m) {
    synchronized(lockA) { // 获得lockA的锁钥匙
        this.value += m;
        synchronized(lockB) { // 欲获得lockB的锁钥匙，但是lockB已经上锁，故而等待
            this.another += m;
        } // 释放lockB的锁钥匙
    } // 释放lockA的锁钥匙
}

public void dec(int m) {
    synchronized(lockB) { // 获得lockB的锁钥匙
        this.another -= m;
        synchronized(lockA) { // 欲获得lockA的锁钥匙，但是lockA已经上锁，故而等待
            this.value -= m;
        } // 释放lockA的锁钥匙
    } // 释放lockB的锁钥匙
}

```